import React from "react";
import { Link } from "react-router-dom";
import "../components/common/common.scss";
import { IoIosSearch } from "react-icons/io";
import { HeaderContainer } from "../components/containers/common/HeaderContainer";
import CategoryTab from "../components/common/CategoryTab/CategoryTab";

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />

      <CategoryTab />
      <div>1안녕하세요.</div>
      <div>2안녕하세요.</div>
      <div>3안녕하세요.</div>
      <div>4안녕하세요.</div>
      <div>5안녕하세요.</div>
    </>
  );
};

export default PostListPage;
