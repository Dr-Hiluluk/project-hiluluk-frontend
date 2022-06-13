import React from "react";
import TagBoxContainer from "../../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../../containers/write/WriteActionButtonsContainer";
import "./EditorFooter.scss";

const EditorFooter = () => {
  return (
    <div className="editor-footer_block">
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </div>
  );
};

export default EditorFooter;
