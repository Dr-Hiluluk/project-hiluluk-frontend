export const INITIALIZE = "write/INITIALIZE" as const;
export const CHANGE_FIELD = "write/CHANGE_FIELD" as const;
export const WRITE_POST = "write/WRITE_POST" as const;
export const WRITE_POST_SUCCESS = "write/WRITE_POST_SUCCESS" as const;
export const WRITE_POST_FAILURE = "write/WRITE_POST_FAILURE" as const;
export const SET_ORIGINAL_POST = "write/SET_ORIGINAL_POST" as const;
export const UPDATE_POST = "write/UPDATE_POST" as const;
export const UPDATE_POST_SUCCESS = "write/UPDATE_POST_SUCCESS" as const;
export const UPDATE_POST_FAILURE = "write/UPDATE_POST_FAILURE" as const;
export const SET_THUMBNAIL = "write/SET_THUMBNAIL" as const;
export const SET_TEMP_POST_ID = "write/SET_TEMP_POST_ID" as const;

export interface writeInitialStateType {
  id: number | null;
  title: string;
  body: string;
  tags: string[];
  thumbnail?: string;
  categoryId: number;
  post: any;
  postError: any;
  is_temp: boolean;
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

export interface setThumbnailDispatch {
  type: typeof SET_THUMBNAIL;
  payload: {
    thumbnail?: string;
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

export interface setOriginalPostDispatch {
  type: typeof SET_ORIGINAL_POST;
  payload: {
    post: any;
  };
}

export interface setTempPostIdDispatch {
  type: typeof SET_TEMP_POST_ID;
  payload: {
    id: number;
  };
}

export interface updatePostDispatch {
  type: typeof UPDATE_POST;
  payload: {
    categoryId: number;
    postId: number;
    title: string;
    body: string;
    tags: string[];
    thumbnail?: string;
    is_temp: boolean;
  };
}

export interface updatePostSuccessDispatch {
  type: typeof UPDATE_POST_SUCCESS;
  payload: {
    post: any;
  };
}

export interface updatePostFailureDispatch {
  type: typeof UPDATE_POST_FAILURE;
  payload: {
    postError: any;
  };
}

export type WriteDispatchType =
  | initializeDispatch
  | changeFieldDispatch
  | setThumbnailDispatch
  | writePostDispatch
  | writePostSuccessDispatch
  | writePostFailureDispatch
  | setOriginalPostDispatch
  | updatePostSuccessDispatch
  | updatePostFailureDispatch
  | setTempPostIdDispatch;
