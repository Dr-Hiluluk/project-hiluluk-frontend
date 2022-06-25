import { takeLatest } from "redux-saga/effects";
import PostApi from "../lib/api/post";
import createRequestSaga from "../lib/createRequestSaga";
import {
  postListInitialStateType,
  readPostListType,
  READ_POST_LIST,
  READ_POST_LIST_FAILURE,
  READ_POST_LIST_SUCCESS,
  SEARCH_POST_LIST,
  SEARCH_POST_LIST_FAILURE,
  SEARCH_POST_LIST_SUCCESS,
} from "./postList.type";

export interface queryStringType {
  page?: string | qs.ParsedQs | undefined | number;
  nickname?: string | qs.ParsedQs | undefined;
  tag?: string | qs.ParsedQs | qs.ParsedQs[] | undefined | number;
  word?: string | qs.ParsedQs | undefined;
}

export const readPostList = ({ page, nickname, tag }: queryStringType) => ({
  type: READ_POST_LIST,
  payload: { page, nickname, tag },
});

export const searchPostList = ({ page, word }: queryStringType) => ({
  type: SEARCH_POST_LIST,
  payload: {
    page,
    word,
  },
});

const readPostListSaga = createRequestSaga(
  READ_POST_LIST,
  PostApi.readPostList,
  "postList",
);

const searchPostListSaga = createRequestSaga(
  SEARCH_POST_LIST,
  PostApi.searchPostList,
  "searchPostList",
);

export function* postListSaga() {
  yield takeLatest(READ_POST_LIST, readPostListSaga);
  yield takeLatest(SEARCH_POST_LIST, searchPostListSaga);
}

const initialState: postListInitialStateType = {
  postList: null,
  searchPostList: null,
  searchPostListError: null,
  postListError: null,
  lastPage: 1,
  totalPostCount: 0,
};

const postList = (
  state: postListInitialStateType = initialState,
  action: readPostListType,
) => {
  switch (action.type) {
    case READ_POST_LIST_SUCCESS:
      return {
        ...state,
        postList: action.payload.postList,
        lastPage: parseInt(action.meta.headers["last-page"], 10),
      };
    case READ_POST_LIST_FAILURE:
      return {
        ...state,
        postListError: action.payload.postListError,
      };
    case SEARCH_POST_LIST_SUCCESS:
      return {
        ...state,
        searchPostList: action.payload.searchPostList,
        lastPage: parseInt(action.meta.headers["last-page"], 10),
        totalPostCount: parseInt(action.meta.headers["total-post-count"], 10),
      };
    case SEARCH_POST_LIST_FAILURE:
      return {
        ...state,
        searchPostListtError: action.payload.searchPostListError,
      };
    default:
      return state;
  }
};

export default postList;
