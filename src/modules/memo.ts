import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import MemoApi from "../lib/api/memo";
import createRequestSaga from "../lib/createRequestSaga";
import {
  CREATE_MEMO,
  CREATE_MEMO_FAILURE,
  CREATE_MEMO_SUCCESS,
  DELETE_MEMO,
  DELETE_MEMO_FAILURE,
  DELETE_MEMO_SUCCESS,
  memoDispatchType,
  memoInitialStateType,
  READ_MEMO_LIST,
  READ_MEMO_LIST_FAILURE,
  READ_MEMO_LIST_SUCCESS,
  UPDATE_MEMO,
  UPDATE_MEMO_FAILURE,
  UPDATE_MEMO_SUCCESS,
} from "./memo.type";

export const createMemo = ({
  userId,
  content,
  refDate,
}: {
  userId: number;
  content: string;
  refDate: string;
}) => ({
  type: CREATE_MEMO,
  payload: {
    userId,
    content,
    refDate,
  },
});

export const readMemoList = ({
  nickname,
  yearMonth,
}: {
  nickname: string;
  yearMonth: string;
}) => ({
  type: READ_MEMO_LIST,
  payload: {
    nickname,
    yearMonth,
  },
});

export const updateMemo = ({
  memoId,
  content,
}: {
  memoId: number;
  content: string;
}) => ({
  type: UPDATE_MEMO,
  payload: {
    memoId,
    content,
  },
});

export const deleteMemo = ({ memoId }: { memoId: number }) => ({
  type: DELETE_MEMO,
  payload: { memoId },
});

const createMemoSaga = createRequestSaga(
  CREATE_MEMO,
  MemoApi.createMemo,
  "memo",
);
const readMemoSaga = createRequestSaga(
  READ_MEMO_LIST,
  MemoApi.readMemoList,
  "memoList",
);
const updateMemoSaga = createRequestSaga(
  UPDATE_MEMO,
  MemoApi.updateMemo,
  "memo",
);
const deleteMemoSaga = createRequestSaga(
  DELETE_MEMO,
  MemoApi.deleteMemo,
  "memo",
);

export function* memoSaga() {
  yield takeLatest(CREATE_MEMO, createMemoSaga);
  yield takeLatest(READ_MEMO_LIST, readMemoSaga);
  yield takeLatest(UPDATE_MEMO, updateMemoSaga);
  yield takeLatest(DELETE_MEMO, deleteMemoSaga);
}

const initialState: memoInitialStateType = {
  memo: null,
  memoError: null,
  memoList: null,
  memoListError: null,
};

const memo = (state = initialState, action: memoDispatchType) => {
  switch (action.type) {
    case CREATE_MEMO_SUCCESS:
      return produce<memoInitialStateType>(state, (draft) => {
        draft.memoList.push(action.payload.memo);
      });
    case CREATE_MEMO_FAILURE:
      return {
        ...state,
        memoError: action.payload.memoError,
      };
    case READ_MEMO_LIST_SUCCESS:
      return {
        ...state,
        memoList: action.payload.memoList,
      };
    case READ_MEMO_LIST_FAILURE:
      return {
        ...state,
        memoListError: action.payload.memoListError,
      };
    case UPDATE_MEMO_SUCCESS:
      return produce<memoInitialStateType>(state, (draft) => {
        const memo = draft.memoList.find(
          (memo: any) => memo.id === action.payload.memo.id,
        );
        memo.content = action.payload.memo.content;
      });
    case UPDATE_MEMO_FAILURE:
      return {
        ...state,
        memoError: action.payload.memoError,
      };
    case DELETE_MEMO_SUCCESS:
      return produce<memoInitialStateType>(state, (draft) => {
        draft.memoList = draft.memoList.filter(
          (memo: any) => memo.id !== action.payload.memo.id,
        );
      });
    case DELETE_MEMO_FAILURE:
      return {
        ...state,
        memoError: action.payload.memoError,
      };
    default:
      return state;
  }
};

export default memo;
