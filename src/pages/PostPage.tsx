import React from "react";
import "../components/common/common.scss";
import { HeaderContainer } from "../components/containers/common/HeaderContainer";
import PostViewerContainer from "../components/containers/post/PostViewerContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
