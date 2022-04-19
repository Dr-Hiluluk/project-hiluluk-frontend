import React from "react";
import { useParams } from "react-router-dom";
import "../components/common/common.scss";

const PostPage = () => {
  const { postId } = useParams();
  return <div>PostPage{postId}</div>;
};

export default PostPage;
