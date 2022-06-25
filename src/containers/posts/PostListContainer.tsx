import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { ReducerType } from "../../modules";
import PostList from "../../components/posts/PostList";
import qs from "qs";
import { queryStringType, readPostList } from "../../modules/postList";

const PostListContainer = () => {
  const { postList, postListError, loading, user } = useSelector(
    ({ postList, loading, user }: ReducerType) => ({
      postList: postList.postList,
      postListError: postList.postListError,
      loading: loading["postList/READ_POST_LIST"],
      user: user.user,
    }),
  );

  const dispatch = useDispatch();
  const match = useParams();
  const location = useLocation();
  useEffect(() => {
    const { nickname } = match;
    const { tag, page }: queryStringType = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (!location.search.includes("word")) {
      dispatch(readPostList({ tag, nickname, page }));
    }
  }, [dispatch, location.search, match]);

  return (
    <PostList
      postList={postList}
      postListError={postListError}
      loading={loading}
      isUser={user}
    />
  );
};

export default PostListContainer;
