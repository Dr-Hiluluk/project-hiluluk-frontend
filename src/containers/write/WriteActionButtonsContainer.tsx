import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ReducerType } from "../../modules";
import { updatePost, writePost } from "../../modules/write";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import AskModal from "../../components/common/AskModal/AskModal";
import useUser from "../../lib/hooks/useUser";

const WriteActionButtonsContainer = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const user = useUser();
  const location = useLocation();
  const {
    categoryId,
    title,
    body,
    tags,
    thumbnail,
    post,
    postError,
    originalPostId,
  } = useSelector(({ write, user }: ReducerType) => ({
    categoryId: write.categoryId,
    title: write.title,
    body: write.body,
    tags: write.tags,
    thumbnail: write.thumbnail,
    post: write.post,
    postError: write.postError,
    originalPostId: write.originalPostId,
  }));

  const onPublish = () => {
    if (!user) {
      setModal(true);
      return;
    }
    if (originalPostId) {
      dispatch(
        updatePost({
          categoryId,
          postId: originalPostId,
          title,
          body,
          tags,
          thumbnail,
        }),
      );
      return;
    }
    dispatch(writePost({ categoryId, title, body, tags, thumbnail }));
  };

  const onCancel = () => {
    navigation(-1);
  };

  useEffect(() => {
    if (post) {
      const { id, user } = post;
      navigation(`/@${user.nickname}/${id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigation, post, postError]);

  return (
    <>
      <WriteActionButtons
        onPublish={onPublish}
        onCancel={onCancel}
        isEdit={!!originalPostId}
      />
      {modal && (
        <AskModal
          title="로그인"
          visible={true}
          description="로그인이 필요한 서비스입니다."
          confirmText="로그인"
          onCancel={() => setModal(false)}
          onConfirm={() => navigation("/login", { state: location.pathname })}
        />
      )}
    </>
  );
};

export default WriteActionButtonsContainer;
