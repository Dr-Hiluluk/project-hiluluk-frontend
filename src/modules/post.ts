import { takeLatest } from "redux-saga/effects";
import PostApi from "../lib/api/post";
import createRequestSaga from "../lib/createRequestSaga";
import {
  readPostInitialStateType,
  ReadPostType,
  READ_POST,
  READ_POST_FAILURE,
  READ_POST_SUCCESS,
  UNLOAD_POST,
} from "./post.type";

export const readPost = (id: any) => ({
  type: READ_POST,
  payload: {
    id,
  },
});

export const unloadPost = () => ({ type: UNLOAD_POST });

// readPostSaga 생성
const readPostSaga = createRequestSaga(READ_POST, PostApi.readPost, "read");
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState: readPostInitialStateType = {
  read: null,
  readError: null,
};

const post = (
  state: readPostInitialStateType = initialState,
  action: ReadPostType,
) => {
  switch (action.type) {
    case READ_POST_SUCCESS:
      return {
        ...state,
        read: action.payload.read,
      };
    case READ_POST_FAILURE:
      return {
        ...state,
        readError: action.payload.readError,
      };
    case UNLOAD_POST:
      return initialState;
    default:
      return state;
  }
};

export default post;
