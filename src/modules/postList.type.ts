export const READ_POST_LIST = "postList/READ_POST_LIST" as const;
export const READ_POST_LIST_SUCCESS =
  "postList/READ_POST_LIST_SUCCESS" as const;
export const READ_POST_LIST_FAILURE =
  "postList/READ_POST_LIST_FAILURE" as const;

export interface postListInitialStateType {
  postList: any;
  postListError: any;
  lastPage: number;
}

export interface readPostListSuccessDispatch {
  type: typeof READ_POST_LIST_SUCCESS;
  payload: {
    postList: any;
  };
  meta: any;
}

export interface readPostListFailureDispatch {
  type: typeof READ_POST_LIST_FAILURE;
  payload: {
    postListError: any;
  };
  meta: any;
}

export type readPostListType =
  | readPostListSuccessDispatch
  | readPostListFailureDispatch;
