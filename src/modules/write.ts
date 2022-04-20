import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import PostApi from "../lib/api/post";
import createRequestSaga from "../lib/createRequestSaga";
import {
  CHANGE_FIELD,
  INITIALIZE,
  WriteDispatchType,
  writeInitialStateType,
  WRITE_POST,
  WRITE_POST_FAILURE,
  WRITE_POST_SUCCESS,
} from "./write.type";

export const initialize = () => ({ type: INITIALIZE });
export const changeField = ({
  key,
  value,
}: {
  key: string;
  value: string[];
}) => ({ type: CHANGE_FIELD, payload: { key, value } });

export const writePost = ({
  title,
  body,
  tags,
}: {
  title: string;
  body: string;
  tags: string[];
}) => ({
  type: WRITE_POST,
  payload: {
    title,
    body,
    tags,
  },
});

// writePost saga 생성
const writePostSaga = createRequestSaga(WRITE_POST, PostApi.createPost, "post");
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
  title: "",
  body: "",
  tags: [],
  post: null,
  postError: null,
};

const write = (
  state: writeInitialStateType = initialState,
  action: WriteDispatchType,
): writeInitialStateType => {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case CHANGE_FIELD:
      return produce(state, (draft: any) => {
        draft[action.payload.key] = action.payload.value;
      });
    case WRITE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload.post,
      };
    case WRITE_POST_FAILURE:
      return {
        ...state,
        postError: action.payload.postError,
      };
    default:
      return state;
  }
};

export default write;
