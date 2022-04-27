import React, { useState } from "react";
import AskDeleteModal from "./AskDeleteModal";
import "./PostActionButtons.scss";

interface postActionButtonsProps {
  onEdit: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onDelete: () => void;
}

const PostActionButtons = ({ onEdit, onDelete }: postActionButtonsProps) => {
  const [modal, setModal] = useState(false);
  const onDeleteClick = () => {
    setModal(true);
  };
  const onConfirm = () => {
    setModal(false);
    onDelete();
  };
  const onCancel = () => {
    setModal(false);
  };

  return (
    <>
      <div className="post-action-buttons_block">
        <button className="post-action-buttons_action-button" onClick={onEdit}>
          수정
        </button>
        <button
          className="post-action-buttons_action-button"
          onClick={onDeleteClick}
        >
          삭제
        </button>
      </div>
      <AskDeleteModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default PostActionButtons;
