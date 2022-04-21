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
      <div>안녕하세요.</div>
    </>
  );
};

export default PostListPage;
