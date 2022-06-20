export const CREATE_MEMO = "memo/CREATE_MEMO" as const;
export const CREATE_MEMO_SUCCESS = "memo/CREATE_MEMO_SUCCESS" as const;
export const CREATE_MEMO_FAILURE = "memo/CREATE_MEMO_FAILURE" as const;

export const READ_MEMO_LIST = "memo/READ_MEMO_LIST" as const;
export const READ_MEMO_LIST_SUCCESS = "memo/READ_MEMO_LIST_SUCCESS" as const;
export const READ_MEMO_LIST_FAILURE = "memo/READ_MEMO_LIST_FAILURE" as const;

export const UPDATE_MEMO = "memo/UPDATE_MEMO" as const;
export const UPDATE_MEMO_SUCCESS = "memo/UPDATE_MEMO_SUCCESS" as const;
export const UPDATE_MEMO_FAILURE = "memo/UPDATE_MEMO_FAILURE" as const;

export interface memoInitialStateType {
  memoList: any;
  memoListError: any;
  memo: any;
  memoError: any;
}

export interface createMemoSuccessDispatch {
  type: typeof CREATE_MEMO_SUCCESS;
  payload: {
    memo: any;
  };
}

export interface createMemoFailureDispatch {
  type: typeof CREATE_MEMO_FAILURE;
  payload: {
    memoError: any;
  };
}

export interface readMemoListSuccessDispatch {
  type: typeof READ_MEMO_LIST_SUCCESS;
  payload: {
    memoList: any;
  };
}

export interface readMemoListFailureDispatch {
  type: typeof READ_MEMO_LIST_FAILURE;
  payload: {
    memoListError: any;
  };
}

export interface updateMemoSuccessDispatch {
  type: typeof UPDATE_MEMO_SUCCESS;
  payload: {
    memo: any;
  };
}

export interface updateMemoFailureDispatch {
  type: typeof UPDATE_MEMO_FAILURE;
  payload: {
    memoError: any;
  };
}

export type memoDispatchType =
  | createMemoSuccessDispatch
  | createMemoFailureDispatch
  | readMemoListSuccessDispatch
  | readMemoListFailureDispatch
  | updateMemoSuccessDispatch
  | updateMemoFailureDispatch;
