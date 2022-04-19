export const INITIALIZE = "write/INITIALIZE" as const;
export const CHANGE_FIELD = "write/CHANGE_FIELD" as const;
export const WRITE_POST = "write/WRITE_POST" as const;
export const WRITE_POST_SUCCESS = "write/WRITE_POST_SUCCESS" as const;
export const WRITE_POST_FAILURE = "write/WRITE_POST_FAILURE" as const;
export interface writeInitialStateType {
  title: string;
  body: string;
  tags: string[];
  post: any;
  postError: any;
}

export interface initializeDispatch {
  type: typeof INITIALIZE;
  payload: any;
}

export interface changeFieldDispatch {
  type: typeof CHANGE_FIELD;
  payload: {
    key: string;
    value: string;
  };
}

export interface writePostDispatch {
  type: typeof WRITE_POST;
  payload: {
    post: any;
    postError: any;
  };
}

export interface writePostSuccessDispatch {
  type: typeof WRITE_POST_SUCCESS;
  payload: {
    post: any;
  };
}

export interface writePostFailureDispatch {
  type: typeof WRITE_POST_FAILURE;
  payload: {
    postError: any;
  };
}

export type WriteDispatchType =
  | initializeDispatch
  | changeFieldDispatch
  | writePostDispatch
  | writePostSuccessDispatch
  | writePostFailureDispatch;
