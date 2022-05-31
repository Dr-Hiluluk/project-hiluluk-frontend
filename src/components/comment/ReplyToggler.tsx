import React from "react";
import { addIcon, subtractIcon } from "../../static/svg";

interface ReplyTogglerProps {
  open: boolean;
  count?: number;
  onToggle: () => any;
}
const ReplyToggler: React.FC<ReplyTogglerProps> = ({
  open,
  onToggle,
  count,
}) => {
  const openText = count ? `${count}개의 답글` : `답글 보기`;

  return (
    <div className="reply-toggler_block" onClick={onToggle}>
      {open ? (
        <img className="subtract-icon" src={subtractIcon} alt="subtract-icon" />
      ) : (
        <img className="add-icon" src={addIcon} alt="add-icon" />
      )}
      <span className="reply-toggler_reply">{open ? "숨기기" : openText}</span>
    </div>
  );
};

export default ReplyToggler;
