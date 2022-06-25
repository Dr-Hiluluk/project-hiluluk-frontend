import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../modules";
import PostList from "../../components/posts/PostList";
import qs from "qs";
import { queryStringType, searchPostList } from "../../modules/postList";
import { useLocation } from "react-router-dom";
import { Responsive } from "../../components/common/Responsive";

const SearchPostListContainer = () => {
  const { postList, totalPostCount, postListError, loading, user } =
    useSelector(({ postList, loading, user }: ReducerType) => ({
      postList: postList.searchPostList,
      totalPostCount: postList.totalPostCount,
      postListError: postList.searchPostListError,
      loading: loading["postList/SEARCH_POST_LIST"],
      user: user.user,
    }));
  const [searchWord, setSearchWord] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const { page = 1, word }: queryStringType = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    setSearchWord(word as string);
    dispatch(searchPostList({ page, word }));
  }, [dispatch, location.search]);
  return (
    postList && (
      <div>
        <Responsive>
          <h2>
            "{searchWord}" 검색 결과: {totalPostCount}개
          </h2>
        </Responsive>
        <PostList
          postList={postList}
          postListError={postListError}
          loading={loading}
          isUser={user}
        />
      </div>
    )
  );
};

export default SearchPostListContainer;
