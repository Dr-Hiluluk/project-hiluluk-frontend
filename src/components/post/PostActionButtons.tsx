import React from "react";
import "./PostActionButtons.scss";

interface postActionButtonsProps {
  onEdit: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const PostActionButtons = ({ onEdit }: postActionButtonsProps) => {
  return (
    <div className="post-action-buttons_block">
      <button className="post-action-buttons_action-button" onClick={onEdit}>
        수정
      </button>
      <button className="post-action-buttons_action-button">삭제</button>
    </div>
  );
};

export default PostActionButtons;
