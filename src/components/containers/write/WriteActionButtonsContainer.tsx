import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReducerType } from "../../../modules";
import { writePost } from "../../../modules/write";
import WriteActionButtons from "../../write/WriteActionButtons";

const WriteActionButtonsContainer = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(
    ({ write }: ReducerType) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
    }),
  );

  const onPublish = () => {
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

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonsContainer;
