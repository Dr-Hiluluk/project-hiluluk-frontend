import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReducerType } from "../../../modules";
import { readPost, unloadPost } from "../../../modules/post";
import PostViewer from "../../post/PostViewer";

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const { read, readError, loading } = useSelector(
    ({ loading, post }: ReducerType) => ({
      read: post.read,
      readError: post.readError,
      loading: loading["post/READ_POST"],
    }),
  );

  useEffect(() => {
    dispatch(readPost(Number(postId)));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);
  return <PostViewer post={read} error={readError} loading={loading} />;
};

export default PostViewerContainer;
