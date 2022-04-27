import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ReducerType } from "../../../modules";
import { readPost, unloadPost } from "../../../modules/post";
import { setOriginalPost } from "../../../modules/write";
import PostActionButtons from "../../post/PostActionButtons";
import PostViewer from "../../post/PostViewer";

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { read, readError, loading, user } = useSelector(
    ({ loading, post, user }: ReducerType) => ({
      read: post.read,
      readError: post.readError,
      loading: loading["post/READ_POST"],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(Number(postId)));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost({ post: read }));
    navigation("/write");
  };

  const ownPost = (user && user.id) === (read && read.user.id);

  return (
    <PostViewer
      post={read}
      error={readError}
      loading={loading}
      actionButtons={ownPost && <PostActionButtons onEdit={onEdit} />}
    />
  );
};

export default PostViewerContainer;
