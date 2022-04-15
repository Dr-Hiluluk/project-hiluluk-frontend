import React from "react";
import { Button } from "../common/Button/Button";
import "./WriteActionButtons.scss";
const WriteActionButtons = ({ onCancel, onPublish }: any) => {
  return (
    <div className="write-action-button-block">
      <Button onClick={onPublish} cyan="cyan">
        게시글 등록
      </Button>
      <Button onClick={onCancel}>취소</Button>
    </div>
  );
};

export default WriteActionButtons;
