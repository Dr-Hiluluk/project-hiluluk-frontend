import React from "react";
import { Responsive } from "../components/common/Responsive";
import EditorContainer from "../components/containers/write/EditorContainer";
import TagBoxContainer from "../components/containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../components/containers/write/WriteActionButtonsContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
