import { takeLatest } from "redux-saga/effects";
import PostApi from "../lib/api/post";
import createRequestSaga from "../lib/createRequestSaga";
import {
  postListInitialStateType,
  readPostListType,
  READ_POST_LIST,
  READ_POST_LIST_FAILURE,
  READ_POST_LIST_SUCCESS,
} from "./postList.type";

export interface queryStringType {
  page?: string | qs.ParsedQs | undefined | number;
  nickname?: string | qs.ParsedQs | undefined;
  tag?: string | qs.ParsedQs | qs.ParsedQs[] | undefined | number;
}

export const readPostList = ({ page, nickname, tag }: queryStringType) => ({
  type: READ_POST_LIST,
  payload: { page, nickname, tag },
});

const readPostListSaga = createRequestSaga(
  READ_POST_LIST,
  PostApi.readPostList,
  "postList",
);

export function* postListSaga() {
  yield takeLatest(READ_POST_LIST, readPostListSaga);
}

const initialState: postListInitialStateType = {
  postList: null,
  postListError: null,
  lastPage: 1,
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
    default:
      return state;
  }
};

export default postList;
