import React from "react";
import { Responsive } from "../components/common/Responsive";
import TagBox from "../components/common/TagBox/TagBox";
import EditorContainer from "../components/containers/write/EditorContainer";
import WriteActionButtons from "../components/write/WriteActionButtons";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
