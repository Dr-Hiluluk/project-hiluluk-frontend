export const READ_POST_LIST = "postList/READ_POST_LIST" as const;
export const READ_POST_LIST_SUCCESS =
  "postList/READ_POST_LIST_SUCCESS" as const;
export const READ_POST_LIST_FAILURE =
  "postList/READ_POST_LIST_FAILURE" as const;
export const SEARCH_POST_LIST = "postList/SEARCH_POST_LIST" as const;
export const SEARCH_POST_LIST_SUCCESS =
  "postList/SEARCH_POST_LIST_SUCCESS" as const;
export const SEARCH_POST_LIST_FAILURE =
  "postList/SEARCH_POST_LIST_FAILURE" as const;

export interface postListInitialStateType {
  postList: any;
  postListError: any;
  searchPostList: any;
  searchPostListError: any;
  lastPage: number;
  totalPostCount?: number;
}

export interface readPostListSuccessDispatch {
  type: typeof READ_POST_LIST_SUCCESS;
  payload: {
    postList: any;
    lastPage: number;
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

export interface searchPostListSuccessDispatch {
  type: typeof SEARCH_POST_LIST_SUCCESS;
  payload: {
    searchPostList: any;
  };
  meta: any;
}
export interface searchPostListFailureDispatch {
  type: typeof SEARCH_POST_LIST_FAILURE;
  payload: {
    searchPostListError: any;
  };
  meta: any;
}

export type readPostListType =
  | readPostListSuccessDispatch
  | readPostListFailureDispatch
  | searchPostListSuccessDispatch
  | searchPostListFailureDispatch;
