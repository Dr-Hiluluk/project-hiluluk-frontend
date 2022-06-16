import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../modules";
import { changeField, initialize, setThumbnail } from "../../modules/write";
import Editor from "../../components/write/Editor";
import useUpload from "../../lib/hooks/useUpload";
import { useCFUpload } from "../../lib/hooks/useCFUpload";
import DragDropUpload from "../../components/common/DragDropUpload";
import PasteUpload from "../../components/common/PasteUpload";
import { usePrevious } from "react-use";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, read, thumbnail } = useSelector(
    ({ write, post }: ReducerType) => ({
      title: write.title,
      body: write.body,
      read: post.read,
      thumbnail: write.thumbnail,
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

  const uploadWithPostId = useCallback(
    async (file: File, postId: number) => {
      if (!postId) return;
      const url = URL.createObjectURL(file);
      setImageBlobUrl(url);
      CFUpload(file, { type: "post", refId: postId });
    },
    [CFUpload],
  );

  const onDragDropUpload = useCallback(
    (file: File) => {
      uploadWithPostId(file, read.id);
    },
    [read, uploadWithPostId],
  );

  // componentDidUnmount 시 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!file) return;
    if (read) {
      uploadWithPostId(file, read.id);
    }
  }, [file, read, uploadWithPostId]);

  useEffect(() => {
    if (prevThumbnail !== image && !thumbnail && image) {
      dispatch(setThumbnail(image));
    }
  }, [dispatch, image, prevThumbnail, thumbnail]);

  return (
    <>
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
