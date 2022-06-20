import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import postList, { postListSaga } from "./postList";
import error from "./error";
import comment, { commentSaga } from "./comment";
import memo, { memoSaga } from "./memo";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  postList,
  error,
  comment,
  memo,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postListSaga(),
    commentSaga(),
    memoSaga(),
  ]);
}

export type ReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
