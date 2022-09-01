import React from "react";
import { Button } from "../common/Button/Button";
import "./WriteActionButtons.scss";

interface writeActionButtonsType {
  onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onPublish: (isTemp?: boolean) => void;
  isEdit: boolean;
}

const WriteActionButtons = ({
  onCancel,
  onPublish,
  isEdit,
}: writeActionButtonsType) => {
  return (
    <div className="write-action-button-block">
      <span className="temp-save-button" onClick={() => onPublish(true)}>
        임시 저장
      </span>
      <Button onClick={() => onPublish()} teal>
        게시글 {isEdit ? "수정" : "등록"}
      </Button>
      <Button onClick={onCancel}>취소</Button>
    </div>
  );
};

export default WriteActionButtons;
