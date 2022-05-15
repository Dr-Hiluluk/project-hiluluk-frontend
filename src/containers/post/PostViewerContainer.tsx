import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostApi from "../../lib/api/post";
import { ReducerType } from "../../modules";
import { readPost, unloadPost } from "../../modules/post";
import { setOriginalPost } from "../../modules/write";
import PostActionButtons from "../../components/post/PostActionButtons";
import PostViewer from "../../components/post/PostViewer";
import useNotFound from "../../lib/hooks/useNotFound";

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { showNotFound } = useNotFound();

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

  useEffect(() => {
    if (readError) {
      if (readError.response && readError.response.status === 404) {
        dispatch(showNotFound()); // 404 처리
        return;
      }
    }
  }, [dispatch, readError, showNotFound]);

  const onEdit = () => {
    dispatch(setOriginalPost({ post: read }));
    navigation("/write");
  };

  const onDelete = async () => {
    try {
      await PostApi.deletePost({ postId: read.id });
      navigation("/");
    } catch (e) {
      console.log(e);
    }
  };

  const ownPost = (user && user.id) === (read && read.user.id);

  return (
    <PostViewer
      post={read}
      error={readError}
      loading={loading}
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onDelete={onDelete} />
      }
    />
  );
};

export default PostViewerContainer;
