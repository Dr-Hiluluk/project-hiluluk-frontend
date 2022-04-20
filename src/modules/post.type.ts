export const READ_POST = "post/READ_POST" as const;
export const READ_POST_SUCCESS = "post/READ_POST_SUCCESS" as const;
export const READ_POST_FAILURE = "post/READ_POST_FAILURE" as const;
export const UNLOAD_POST = "post/UNLOAD_POST" as const;

export interface readPostInitialStateType {
  read: any;
  readError: any;
}

export interface readPostSuccessDispatch {
  type: typeof READ_POST_SUCCESS;
  payload: {
    read: any;
  };
}

export interface readPostFailureDispatch {
  type: typeof READ_POST_FAILURE;
  payload: {
    readError: any;
  };
}

export interface unloadPostDispatch {
  type: typeof UNLOAD_POST;
}

export type ReadPostType =
  | readPostSuccessDispatch
  | readPostFailureDispatch
  | unloadPostDispatch;
