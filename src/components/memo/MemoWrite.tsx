import { format } from "date-fns";
import React from "react";
import { dismissIcon, saveIcon } from "../../static/svg";

export interface MemoWriteProps {
  content: string;
  date: Date;
  onToggleEdit: () => any;
  onChange: (e: any) => any;
  onCreate: () => any;
}

const MemoWrite: React.FC<MemoWriteProps> = ({
  content,
  date,
  onToggleEdit,
  onChange,
  onCreate,
}) => {
  return (
    <div className="memo-viewer_block">
      <div className="memo-viewer_header">
        <span>{format(date, "yyyy년 M월 d일")}</span>
        <div className="button-wrapper">
          <button onClick={onCreate}>
            <img alt="saveMemo" src={saveIcon} />
          </button>
          <button onClick={onToggleEdit}>
            <img alt="dismissMemo" src={dismissIcon} />
          </button>
        </div>
      </div>
      <textarea
        className="memo-viewer_textarea"
        value={content}
        onChange={onChange}
        placeholder="하루를 기록하세요."
      />
    </div>
  );
};

export default MemoWrite;
