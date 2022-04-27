import React from "react";
import AskModal from "../common/AskModal/AskModal";

interface askDeleteModalProps {
  visible: boolean;
  onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onConfirm: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const AskDeleteModal = ({
  visible,
  onConfirm,
  onCancel,
}: askDeleteModalProps) => {
  return (
    <AskModal
      visible={visible}
      title="게시글 삭제"
      description="정말 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskDeleteModal;
