import React from "react";
import { Responsive } from "../components/common/Responsive";
import TagBox from "../components/common/TagBox/TagBox";
import Editor from "../components/write/Editor";

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
};

export default WritePage;
