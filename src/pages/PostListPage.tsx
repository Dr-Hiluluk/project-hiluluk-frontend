import React from "react";
import "../components/common/common.scss";
import { HeaderContainer } from "../components/containers/common/HeaderContainer";
import CategoryTab from "../components/common/CategoryTab/CategoryTab";
import PaginationContainer from "../components/containers/posts/PaginationContainer";
import PostListContainer from "../components/containers/posts/PostListContainer";

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <CategoryTab />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
