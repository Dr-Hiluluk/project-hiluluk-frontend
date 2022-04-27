import React from "react";
import "./AskModal.scss";
interface askModalProps {
  visible: boolean;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onConfirm: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const AskModal = ({
  visible,
  title,
  description,
  cancelText = "취소",
  confirmText = "확인",
  onCancel,
  onConfirm,
}: askModalProps) => {
  if (!visible) return null;
  return (
    <div className="ask-modal_full-screen">
      <div className="ask-modal_block">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="ask-modal_button-wrapper">
          <button className="ask-modal_button cancel" onClick={onCancel}>
            {cancelText}
          </button>
          <button className="ask-modal_button confirm" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskModal;
