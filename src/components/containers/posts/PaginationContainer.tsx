import qs from "qs";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { ReducerType } from "../../../modules";
import { queryStringType } from "../../../modules/postList";
import Pagination from "../../posts/Pagination";

const PaginationContainer = () => {
  const { lastPage, postList, loading } = useSelector(
    ({ postList, loading }: ReducerType) => ({
      lastPage: postList.lastPage,
      postList: postList.postList,
      loading: loading["postList/READ_POST_LIST"],
    }),
  );
  const { nickname } = useParams();
  const location = useLocation();
  const { tag, page = 1 }: queryStringType = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  if (!postList || loading) return null;

  return (
    <Pagination
      lastPage={lastPage}
      nickname={nickname}
      page={Number(page)}
      tag={tag}
    />
  );
};

export default PaginationContainer;
