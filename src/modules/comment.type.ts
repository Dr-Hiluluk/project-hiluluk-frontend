import { comment } from "../components/post/PostCommentList";

export const CREATE_COMMENT = "comment/CREATE_COMMENT" as const;
export const CREATE_COMMENT_SUCCESS = "comment/CREATE_COMMENT_SUCCESS" as const;
export const CREATE_COMMENT_FAILURE = "comment/CREATE_COMMENT_FAILURE" as const;
export const READ_COMMENT_LIST = "comment/READ_COMMENT_LIST" as const;
export const READ_COMMENT_LIST_SUCCESS =
  "comment/READ_COMMENT_LIST_SUCCESS" as const;
export const READ_COMMENT_LIST_FAILURE =
  "comment/READ_COMMENT_LIST_FAILURE" as const;
export const READ_CHILD_COMMENT_LIST =
  "comment/READ_CHILD_COMMENT_LIST" as const;
export const READ_CHILD_COMMENT_LIST_SUCCESS =
  "comment/READ_CHILD_COMMENT_LIST_SUCCESS" as const;
export const READ_CHILD_COMMENT_LIST_FAILURE =
  "comment/READ_CHILD_COMMENT_LIST_FAILURE" as const;
export const UPDATE_COMMENT = "comment/UPDATE_COMMENT" as const;
export const UPDATE_COMMENT_SUCCESS = "comment/UPDATE_COMMENT_SUCCESS" as const;
export const UPDATE_COMMENT_FAILURE = "comment/UPDATE_COMMENT_FAILURE" as const;
export const DELETE_COMMENT = "comment/DELETE_COMMENT" as const;
export const DELETE_COMMENT_SUCCESS = "comment/DELETE_COMMENT_SUCCESS" as const;
export const DELETE_COMMENT_FAILURE = "comment/DELETE_COMMENT_FAILURE" as const;

export interface commentInitialState {
  comment: comment | null;
  commentError: any;
  commentList: comment[];
  commentListError: any;
  childCommentList: any;
  childCommentListError: any;
}

export interface readCommentListSuccessDispatch {
  type: typeof READ_COMMENT_LIST_SUCCESS;
  payload: {
    commentList: any;
  };
}

export interface readCommentListFailureDispatch {
  type: typeof READ_COMMENT_LIST_FAILURE;
  payload: {
    commentListError: any;
  };
}

export interface readChildCommentListSuccessDispatch {
  type: typeof READ_CHILD_COMMENT_LIST_SUCCESS;
  payload: {
    childCommentList: any;
  };
}

export interface readChildCommentListFailureDispatch {
  type: typeof READ_CHILD_COMMENT_LIST_FAILURE;
  payload: {
    childCommentListError: any;
  };
}

export interface createCommentSuccessDispatch {
  type: typeof CREATE_COMMENT_SUCCESS;
  payload: {
    comment: any;
  };
}

export interface createCommentFailureDispatch {
  type: typeof CREATE_COMMENT_FAILURE;
  payload: {
    commentError: any;
  };
}

export interface deleteCommentSuccessDispatch {
  type: typeof DELETE_COMMENT_SUCCESS;
  payload: {
    comment: any;
  };
}

export interface deleteCommentFailureDispatch {
  type: typeof DELETE_COMMENT_FAILURE;
  payload: {
    commentError: any;
  };
}

export interface updateCommentSuccessDispatch {
  type: typeof UPDATE_COMMENT_SUCCESS;
  payload: {
    comment: any;
  };
}

export interface updateCommentFailureDispatch {
  type: typeof UPDATE_COMMENT_FAILURE;
  payload: {
    commentError: any;
  };
}

export type CommentDispatchType =
  | readCommentListSuccessDispatch
  | readCommentListFailureDispatch
  | readChildCommentListSuccessDispatch
  | readChildCommentListFailureDispatch
  | createCommentSuccessDispatch
  | createCommentFailureDispatch
  | deleteCommentSuccessDispatch
  | deleteCommentSuccessDispatch
  | updateCommentSuccessDispatch
  | updateCommentFailureDispatch;
