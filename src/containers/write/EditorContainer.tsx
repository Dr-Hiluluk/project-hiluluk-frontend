import React, { useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../modules";
import {
  changeField,
  initialize,
  setTempPostId,
  setThumbnail,
} from "../../modules/write";
import Editor from "../../components/write/Editor";
import useUpload from "../../lib/hooks/useUpload";
import { useCFUpload } from "../../lib/hooks/useCFUpload";
import DragDropUpload from "../../components/common/DragDropUpload";
import PasteUpload from "../../components/common/PasteUpload";
import { usePrevious } from "react-use";
import Category from "../../components/common/Category/Category";
import PostApi from "../../lib/api/post";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { categoryId, title, body, read, thumbnail, is_temp, id } = useSelector(
    ({ write, post }: ReducerType) => ({
      categoryId: write.categoryId,
      title: write.title,
      body: write.body,
      read: post.read,
      thumbnail: write.thumbnail,
      is_temp: write.is_temp,
      id: write.id,
    }),
  );

  const onChangeField = useCallback(
    (paylaod) => dispatch(changeField(paylaod)),
    [dispatch],
  );

  const [upload, file] = useUpload();
  const [CFUpload, image] = useCFUpload();
  const [imageBlobUrl, setImageBlobUrl] = useState<string | null>(null);
  const prevThumbnail = usePrevious(image);
  const [lastSavedPost, setLastSavedPost] = useState({
    title: "",
    body: "",
  });
  const postIdRef = useRef(id);
  const uploadWithPostId = useCallback(
    async (file: File) => {
      let tempId = id;
      if (!id) {
        const tempTitle = title || "temp title";
        const tempBody = body || "temp body";
        const variables = {
          categoryId: categoryId || 1,
          title: tempTitle,
          body: tempBody,
          tags: [],
          thumbnail: thumbnail,
          is_temp: true,
        };
        const response = await PostApi.createPost(variables);
        if (!response || !response.data) return;
        tempId = response.data.id;
        dispatch(setTempPostId({ id: response.data.id }));
      }
      if (!tempId) return;
      // console.log("Uploading...");
      // TODO: 이미지 업로드 되는동안, 업로드 중 이라는 표시 남기기
      const url = URL.createObjectURL(file);
      setImageBlobUrl(url);
      await CFUpload(file, { type: "post", refId: tempId });
    },
    [CFUpload, body, categoryId, dispatch, id, thumbnail, title],
  );

  const onDragDropUpload = useCallback(
    (file: File) => {
      uploadWithPostId(file);
    },
    [uploadWithPostId],
  );

  // 임시저장
  const onTempSave = useCallback(async () => {
    // TODO: 제목, 내용 빈 경우 임시 저장 안되도록 하고 얼럿 추가하기
    // if (!title || !body) {
    //   alert("제목 또는 내용이 비어 있습니다.");
    //   return;
    // }
    const variables = {
      categoryId: 1,
      title,
      body,
      tags: [],
      thumbnail: thumbnail,
      is_temp: true,
    };

    if (!id) {
      const response = await PostApi.createPost(variables);
      if (!response || !response.data) return;
      dispatch(setTempPostId({ id: response.data.id }));
    }
    if (is_temp && id) {
      await PostApi.updatePost({ postId: id, ...variables });
    }
    if (shallowEqual(lastSavedPost, { title, body })) return;
    setLastSavedPost({ title, body });
  }, [body, dispatch, is_temp, lastSavedPost, id, title, thumbnail]);

  // componentDidUnmount 시 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!file) return;
    uploadWithPostId(file);
  }, [file, uploadWithPostId]);

  useEffect(() => {
    postIdRef.current = id;
  }, [id]);

  useEffect(() => {
    if (prevThumbnail !== image && !read?.thumbnail && image) {
      dispatch(setThumbnail(image));
    }
  }, [dispatch, image, prevThumbnail, read?.thumbnail]);

  useEffect(() => {
    const isChanged = !shallowEqual(lastSavedPost, { title, body });
    if (isChanged) {
      const timeId = setTimeout(() => {
        if (!id && (!title || !body)) return;
        onTempSave();
      }, 10 * 1000);
      return () => {
        clearTimeout(timeId);
      };
    }
  }, [body, id, lastSavedPost, onTempSave, title]);
  // useSaveHotKey(() => onTempSave());

  return (
    <>
      <Category onChangeField={onChangeField} />
      <Editor
        onUpload={upload}
        onChangeField={onChangeField}
        title={title}
        body={body}
        image={image}
      />
      <DragDropUpload onUpload={onDragDropUpload} />
      <PasteUpload onUpload={onDragDropUpload} />
    </>
  );
};

export default EditorContainer;
