import React from "react";
import { Responsive } from "../components/common/Responsive";
import EditorContainer from "../components/containers/write/EditorContainer";
import TagBoxContainer from "../components/containers/write/TagBoxContainer";
import WriteActionButtons from "../components/write/WriteActionButtons";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
