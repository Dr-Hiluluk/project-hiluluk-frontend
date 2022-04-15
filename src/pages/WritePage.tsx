import React from "react";
import { Responsive } from "../components/common/Responsive";
import TagBox from "../components/common/TagBox/TagBox";
import Editor from "../components/write/Editor";
import WriteActionButtons from "../components/write/WriteActionButtons";

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
