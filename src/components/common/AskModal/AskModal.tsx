import React from "react";
import { Button } from "../Button/Button";
import "./AskModal.scss";
interface askModalProps {
  visible: boolean;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onConfirm: React.MouseEventHandler<HTMLButtonElement> | undefined;
  color?: string;
}

const AskModal = ({
  visible,
  title,
  description,
  cancelText = "취소",
  confirmText = "확인",
  onCancel,
  onConfirm,
  color,
}: askModalProps) => {
  if (!visible) return null;
  return (
    <div className="ask-modal_full-screen">
      <div className="ask-modal_block">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="ask-modal_button-wrapper">
          <Button onClick={onCancel}>{cancelText}</Button>
          <Button
            red={color === "red" ? true : false}
            teal={color === "teal" ? true : false}
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AskModal;
