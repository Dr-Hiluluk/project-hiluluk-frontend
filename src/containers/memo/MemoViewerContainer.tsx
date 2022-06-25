import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AskModal from "../../components/common/AskModal/AskModal";
import MemoViewer from "../../components/memo/MemoViewer";
import useUser from "../../lib/hooks/useUser";

export interface MemoViewerContainerProps {
  memo: any;
  date: Date;
  onEdit: (memoId: number) => any;
  onRemove: (memoId: number) => any;
}

const MemoViewerContainer: React.FC<MemoViewerContainerProps> = ({
  date,
  memo,
  onRemove,
  onEdit,
}) => {
  const user = useUser();
  const { nickname } = useParams();
  const isMine = nickname === user?.nickname;

  const [modal, setModal] = useState(false);
  const onDeleteClick = () => {
    setModal(true);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove(memo.id);
  };
  const onCancel = () => {
    setModal(false);
  };

  return (
    <>
      <MemoViewer
        isMine={isMine}
        memo={memo}
        date={date}
        onEdit={onEdit}
        onRemove={onDeleteClick}
      />
      <AskModal
        visible={modal}
        title="메모 삭제"
        description="정말 삭제하시겠습니까?"
        confirmText="삭제"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default MemoViewerContainer;
