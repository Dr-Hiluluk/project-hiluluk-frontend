import React from "react";
import MemoViewer from "../../components/memo/MemoViewer";
import { useUserId } from "../../lib/hooks/useUser";

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
  const userId = useUserId();
  const isMine = memo?.userId === userId;

  return (
    <MemoViewer
      isMine={isMine}
      memo={memo}
      date={date}
      onEdit={onEdit}
      onRemove={onRemove}
    />
  );
};

export default MemoViewerContainer;
