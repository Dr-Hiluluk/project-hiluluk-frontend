import React from "react";
import { Button } from "../common/Button/Button";
import "./WriteActionButtons.scss";

interface writeActionButtonsType {
  onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onPublish: (is_temp?: boolean) => void;
}

const WriteActionButtons = ({
  onCancel,
  onPublish,
}: writeActionButtonsType) => {
  return (
    <div className="write-action-button-block">
      <span className="temp-save-button" onClick={() => onPublish(true)}>
        임시 저장
      </span>
      <Button onClick={() => onPublish()} teal>
        게시글 등록
      </Button>
      <Button onClick={onCancel}>취소</Button>
    </div>
  );
};

export default WriteActionButtons;
