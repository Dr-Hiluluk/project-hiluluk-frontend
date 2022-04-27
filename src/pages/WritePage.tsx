import React from "react";
import { Helmet } from "react-helmet-async";
import { Responsive } from "../components/common/Responsive";
import EditorContainer from "../components/containers/write/EditorContainer";
import TagBoxContainer from "../components/containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../components/containers/write/WriteActionButtonsContainer";

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - Dr.Hiluluk</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
