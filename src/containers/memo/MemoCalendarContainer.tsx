import { format } from "date-fns";
import React, { useCallback, useEffect, useState } from "react";
import { ViewCallbackProperties } from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useBooleanToggle from "../../lib/hooks/useBooleanToggle";
import { ReducerType } from "../../modules";
import { deleteMemo, readMemoList } from "../../modules/memo";
import CalendarContainer from "../user/CalendarContainer";
import MemoWriteContainer from "../write/MemoWriteContainer";
import MemoViewerContainer from "./MemoViewerContainer";

const MemoCalendarContainer = () => {
  const [date, setDate] = useState(new Date());
  const [edit, onToggleEdit] = useBooleanToggle(false);
  const [memoId, setMemoId] = useState<any>(null);
  const refDate = format(date, "yyyyMMdd");
  const [yearMonth, setYearMonth] = useState(refDate.slice(0, 6));
  // const yearMonth = refDate.slice(0, 6);
  const dispatch = useDispatch();
  const { nickname } = useParams();

  const { memoList, memoListError } = useSelector(({ memo }: ReducerType) => ({
    memoList: memo.memoList,
    memoListError: memo.memoListError,
  }));

  const onSetMemoId = (memoId: number | null) => {
    setMemoId(memoId);
    onToggleEdit();
  };

  const onRemove = useCallback(
    (memoId: number) => {
      dispatch(deleteMemo({ memoId }));
    },
    [dispatch],
  );

  const onChangeMonth = ({
    action,
    activeStartDate,
    value,
    view,
  }: ViewCallbackProperties) => {
    const activeYearMonth = format(activeStartDate, "yyyyMMdd").slice(0, 6);
    setYearMonth(activeYearMonth);
  };

  useEffect(() => {
    if (nickname) {
      dispatch(readMemoList({ nickname, yearMonth }));
    }
  }, [dispatch, nickname, yearMonth]);

  useEffect(() => {
    if (memoListError) {
      console.error(memoListError);
    }
  }, [memoListError]);

  const curMemo =
    memoList && memoList.find((memo: any) => memo.refDate === refDate);
  return (
    <>
      <div className="user-profile_calendar">
        <CalendarContainer
          onChangeMonth={onChangeMonth}
          memoList={memoList}
          date={date}
          onChange={setDate}
        />
      </div>
      <div className="user-profile_memo">
        {edit ? (
          <MemoWriteContainer
            originalContent={curMemo?.content || ""}
            date={date}
            memoId={memoId}
            onToggleEdit={onToggleEdit}
            refDate={refDate}
          />
        ) : (
          <MemoViewerContainer
            memo={curMemo}
            date={date}
            onEdit={onSetMemoId}
            onRemove={onRemove}
          />
        )}
      </div>
    </>
  );
};

export default MemoCalendarContainer;
