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
  READ_CHILD_COMMENT_LIST,
  READ_CHILD_COMMENT_LIST_FAILURE,
  READ_CHILD_COMMENT_LIST_SUCCESS,
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

export const readChildCommentList = (commentId: number) => ({
  type: READ_CHILD_COMMENT_LIST,
  payload: {
    commentId,
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

const readCommentListSaga = createRequestSaga(
  READ_COMMENT_LIST,
  CommentApi.readCommentList,
  "commentList",
);

const readChildCommentListSaga = createRequestSaga(
  READ_CHILD_COMMENT_LIST,
  CommentApi.readChildCommentList,
  "childCommentList",
);

const createCommentSaga = createRequestSaga(
  CREATE_COMMENT,
  CommentApi.createComment,
  "comment",
);

const deleteCommentSaga = createRequestSaga(
  DELETE_COMMENT,
  CommentApi.deleteComment,
  "comment",
);

const updateCommentSaga = createRequestSaga(
  UPDATE_COMMENT,
  CommentApi.updateComment,
  "comment",
);

export function* commentSaga() {
  yield takeLatest(READ_COMMENT_LIST, readCommentListSaga);
  yield takeLatest(READ_CHILD_COMMENT_LIST, readChildCommentListSaga);
  yield takeLatest(CREATE_COMMENT, createCommentSaga);
  yield takeLatest(DELETE_COMMENT, deleteCommentSaga);
  yield takeLatest(UPDATE_COMMENT, updateCommentSaga);
}

const initialState: commentInitialState = {
  comment: null,
  commentError: null,
  commentList: [],
  commentListError: null,
  childCommentList: [],
  childCommentListError: null,
};

const comment = (
  state: commentInitialState = initialState,
  action: CommentDispatchType,
) => {
  switch (action.type) {
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
    case READ_CHILD_COMMENT_LIST_SUCCESS:
      return produce(state, (draft: any) => {
        const parent = draft.commentList.find(
          (comment: any) =>
            comment.id === action.payload.childCommentList[0].parentId,
        );
        if (parent.children.length === 0) {
          parent.children.push(...action.payload.childCommentList);
        }
      });
    case READ_CHILD_COMMENT_LIST_FAILURE:
      return {
        ...state,
        childCommentListError: action.payload.childCommentListError,
      };
    case CREATE_COMMENT_SUCCESS:
      return produce(state, (draft: any) => {
        draft.comment = action.payload.comment;
        if (action.payload.comment.parentId) {
          let parent = draft.commentList.find(
            (comment: any) => comment.id === action.payload.comment.path[0],
          );
          parent.count++;
          parent.children.push(action.payload.comment);
        } else {
          draft.commentList.push(action.payload.comment);
        }
      });
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        commentError: action.payload.commentError,
      };
    case DELETE_COMMENT_SUCCESS:
      return produce(state, (draft: any) => {
        // 대댓글에대한 댓글을 삭제할때
        if (action.payload.comment.parentId) {
          let parent = draft.commentList.find(
            (comment: any) => comment.id === action.payload.comment.path[0],
          );

          const newCommentList = parent.children.filter(
            (comment: any) => comment.id !== action.payload.comment.id,
          );
          parent.count--;
          parent.children = [...newCommentList];

          // 부모댓글에대한 댓글을 삭제할때
        } else if (action.payload.comment.children.length > 0) {
          const deletedComment = draft.commentList.find(
            (comment: any) => comment.id === action.payload.comment.id,
          );
          deletedComment.content = action.payload.comment.content;
          deletedComment.isDeleted = action.payload.comment.isDeleted;
        } else {
          let filteredCommentList = draft.commentList.filter(
            (comment: any) => comment.id !== action.payload.comment.id,
          );
          draft.commentList = [...filteredCommentList];
        }
      });
    case UPDATE_COMMENT_SUCCESS:
      return produce(state, (draft: any) => {
        let path = action.payload.comment.path;
        if (action.payload.comment.parentId) {
          let parent = draft.commentList.find(
            (comment: any) => comment.id === path[0],
          );
          let newChild = parent.children.find(
            (comment: any) => comment.id === action.payload.comment.id,
          );
          newChild.content = action.payload.comment.content;
        } else {
          draft.commentList.forEach((comment: any) => {
            if (comment.id === action.payload.comment.id) {
              comment.content = action.payload.comment.content;
            }
          });
        }
      });
    default:
      return state;
  }
};

export default comment;
