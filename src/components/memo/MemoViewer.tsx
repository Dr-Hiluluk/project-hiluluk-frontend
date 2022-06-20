import { format } from "date-fns";
import React from "react";
import { editIcon, removeIcon } from "../../static/svg";
import "./MemoViewer.scss";

export interface MemoViewerProps {
  memo: any;
  date: Date;
  isMine: boolean;
  onEdit: (memoId: number) => any;
  onRemove: (memoId: number) => any;
}

const MemoViewer: React.FC<MemoViewerProps> = ({
  isMine,
  memo,
  date,
  onEdit,
  onRemove,
}) => {
  return (
    <div className="memo-viewer_block">
      <div className="memo-viewer_header">
        <span>{format(date, "yyyy년 M월 d일")}</span>

        {isMine && (
          <div className="button-wrapper">
            <button onClick={() => onEdit(memo?.id || null)}>
              <img alt="editMemo" src={editIcon} />
            </button>
            <button onClick={() => onRemove(memo.id || null)}>
              <img alt="removeMemo" src={removeIcon} />
            </button>
          </div>
        )}
      </div>
      <span className="memo-viwer_content">
        {memo ? memo.content : "하루를 기록하세요."}
      </span>
    </div>
  );
};

export default MemoViewer;
