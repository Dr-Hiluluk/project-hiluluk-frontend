import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import CommentApi from "../lib/api/comment";
import createRequestSaga from "../lib/createRequestSaga";
import {
  CommentDispatchType,
  commentInitialState,
  CREATE_COMMENT,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  READ_COMMENT_LIST,
  READ_COMMENT_LIST_FAILURE,
  READ_COMMENT_LIST_SUCCESS,
  UPDATE_COMMENT,
  UPDATE_COMMENT_SUCCESS,
} from "./comment.type";

export const readCommentList = (postId: number) => ({
  type: READ_COMMENT_LIST,
  payload: {
    postId,
  },
});

export const createComment = (
  userId: number,
  postId: number,
  parentId: number | null,
  content: string,
) => ({
  type: CREATE_COMMENT,
  payload: {
    userId,
    postId,
    parentId,
    content,
  },
});

export const deleteComment = (commentId: number) => ({
  type: DELETE_COMMENT,
  payload: {
    commentId,
  },
});

export const updateComment = (commentId: number, content: string) => ({
  type: UPDATE_COMMENT,
  payload: {
    commentId,
    content,
  },
});

const createCommentSaga = createRequestSaga(
  CREATE_COMMENT,
  CommentApi.createComment,
  "comment",
);

const readCommentListSaga = createRequestSaga(
  READ_COMMENT_LIST,
  CommentApi.readCommentList,
  "commentList",
);

const updateCommentSaga = createRequestSaga(
  UPDATE_COMMENT,
  CommentApi.updateComment,
  "comment",
);

const deleteCommentSaga = createRequestSaga(
  DELETE_COMMENT,
  CommentApi.deleteComment,
  "comment",
);

export function* commentSaga() {
  yield takeLatest(CREATE_COMMENT, createCommentSaga);
  yield takeLatest(READ_COMMENT_LIST, readCommentListSaga);
  yield takeLatest(UPDATE_COMMENT, updateCommentSaga);
  yield takeLatest(DELETE_COMMENT, deleteCommentSaga);
}

const initialState: commentInitialState = {
  comment: null,
  commentError: null,
  commentList: [],
  commentListError: null,
};

const comment = (
  state: commentInitialState = initialState,
  action: CommentDispatchType,
) => {
  switch (action.type) {
    case CREATE_COMMENT_SUCCESS:
      return produce<commentInitialState>(state, (draft) => {
        draft.comment = action.payload.comment;
        if (action.payload.comment.parentId) {
          let parent = draft.commentList.find(
            (comment) => comment.id === action.payload.comment.path[0],
          );
          if (parent) {
            parent.count++;
            let spliceIndex = -1;
            draft.commentList.forEach((comment, index: number) => {
              if (comment.path[0] === action.payload.comment.path[0]) {
                spliceIndex = index;
              }
            });
            draft.commentList.splice(
              spliceIndex + 1,
              0,
              action.payload.comment,
            );
          }
        } else {
          draft.commentList.push(action.payload.comment);
        }
      });
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        commentError: action.payload.commentError,
      };
    case READ_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        commentList: action.payload.commentList,
      };
    case READ_COMMENT_LIST_FAILURE:
      return {
        ...state,
        commentListError: action.payload.commentListError,
      };
    case UPDATE_COMMENT_SUCCESS:
      return produce<commentInitialState>(state, (draft) => {
        let updateComment = draft.commentList.find(
          (comment) => comment.id === action.payload.comment.id,
        );
        if (updateComment) {
          updateComment.content = action.payload.comment.content;
          updateComment.updatedAt = action.payload.comment.updatedAt;
        }
      });
    case DELETE_COMMENT_SUCCESS:
      return produce<commentInitialState>(state, (draft) => {
        // 삭제할 댓글이 대댓글인 경우
        if (action.payload.comment.parentId) {
          let parent = draft.commentList.find(
            (comment) => comment.id === action.payload.comment.path[0],
          );
          let filteredComments = draft.commentList.filter(
            (comment) => comment.id !== action.payload.comment.id,
          );
          if (parent) {
            parent.count--;
          }
          draft.commentList = [...filteredComments];

          // 삭제할 댓글에 대댓글이 있을 경우, 내용 삭제로 바꾸고 isDeleted 값 true로 변경
        } else if (action.payload.comment.children.length > 0) {
          const deletedComment = draft.commentList.find(
            (comment) => comment.id === action.payload.comment.id,
          );
          if (deletedComment) {
            deletedComment.content = action.payload.comment.content;
            deletedComment.isDeleted = action.payload.comment.isDeleted;
          }

          // 삭제할 댓글에 대댓글이 없는 경우, 바로 삭제
        } else {
          let filteredCommentList = draft.commentList.filter(
            (comment) => comment.id !== action.payload.comment.id,
          );
          draft.commentList = [...filteredCommentList];
        }
      });
    default:
      return state;
  }
};

export default comment;
