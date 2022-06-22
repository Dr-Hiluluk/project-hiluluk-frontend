import React from "react";
import { useParams } from "react-router-dom";
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
