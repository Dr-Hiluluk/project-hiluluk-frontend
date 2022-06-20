import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import MemoWrite from "../../components/memo/MemoWrite";
import useInput from "../../lib/hooks/useInput";
import useUser from "../../lib/hooks/useUser";
import { createMemo, updateMemo } from "../../modules/memo";

export interface MemoWriteContainerProps {
  date: Date;
  onToggleEdit: () => any;
  memoId: number;
  refDate: string;
  originalContent: string;
}

const MemoWriteContainer: React.FC<MemoWriteContainerProps> = ({
  date,
  onToggleEdit,
  memoId,
  refDate,
  originalContent,
}) => {
  const [content, setContent] = useInput(originalContent);
  const user = useUser();
  const dispatch = useDispatch();

  const onCreate = useCallback(() => {
    if (user && !memoId) {
      dispatch(createMemo({ userId: user.id, content, refDate }));
    } else if (memoId) {
      dispatch(updateMemo({ memoId, content }));
    }
    onToggleEdit();
  }, [content, dispatch, onToggleEdit, user, memoId, refDate]);

  return (
    <MemoWrite
      content={content}
      onChange={setContent}
      date={date}
      onToggleEdit={onToggleEdit}
      onCreate={onCreate}
    />
  );
};

export default MemoWriteContainer;
