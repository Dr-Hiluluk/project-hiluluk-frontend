import React from "react";
import "../components/common/common.scss";
import { HeaderContainer } from "../containers/common/HeaderContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
