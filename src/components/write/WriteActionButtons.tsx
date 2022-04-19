import React from "react";
import { Button } from "../common/Button/Button";
import "./WriteActionButtons.scss";

interface writeActionButtonsType {
  onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onPublish: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const WriteActionButtons = ({
  onCancel,
  onPublish,
}: writeActionButtonsType) => {
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
