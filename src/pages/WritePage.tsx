import React from "react";
import { Helmet } from "react-helmet-async";
import { Responsive } from "../components/common/Responsive";
import { HeaderContainer } from "../containers/common/HeaderContainer";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Helmet>
          <title>글 작성하기 - Dr.Hiluluk</title>
        </Helmet>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonsContainer />
      </Responsive>
    </>
  );
};

export default WritePage;
