import React from "react";
import "../components/common/common.scss";
import { HeaderContainer } from "../containers/common/HeaderContainer";
import CategoryTab from "../components/common/CategoryTab/CategoryTab";
import PaginationContainer from "../containers/posts/PaginationContainer";
import PostListContainer from "../containers/posts/PostListContainer";

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
