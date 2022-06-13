import React from "react";
import { Helmet } from "react-helmet-async";
import EditorFooter from "../components/common/EditorFooter";
import { Responsive } from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";

const WritePage = () => {
  return (
    <>
      <Responsive>
        <Helmet>
          <title>글 작성하기 - Dr.Hiluluk</title>
        </Helmet>
        <EditorContainer />
        <EditorFooter />
      </Responsive>
    </>
  );
};

export default WritePage;
