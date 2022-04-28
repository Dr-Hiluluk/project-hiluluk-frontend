import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReducerType } from "../../modules";
import { updatePost, writePost } from "../../modules/write";
import WriteActionButtons from "../../components/write/WriteActionButtons";

const WriteActionButtonsContainer = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }: ReducerType) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  const onPublish = () => {
    if (originalPostId) {
      const contents = tags.map((tag: any) => tag.content);

      dispatch(
        updatePost({ postId: originalPostId, title, body, tags: contents }),
      );
      return;
    }
    dispatch(writePost({ title, body, tags }));
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
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default WriteActionButtonsContainer;
