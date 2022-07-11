import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import PostApi from "../lib/api/post";
import createRequestSaga from "../lib/createRequestSaga";
import {
  CHANGE_FIELD,
  INITIALIZE,
  SET_ORIGINAL_POST,
  SET_THUMBNAIL,
  updatePostDispatch,
  UPDATE_POST,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
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

export const setThumbnail = (thumbnail: string) => ({
  type: SET_THUMBNAIL,
  payload: { thumbnail },
});

export const writePost = ({
  categoryId,
  title,
  body,
  tags,
  thumbnail,
}: {
  categoryId: number;
  title: string;
  body: string;
  tags: string[];
  thumbnail?: string;
}) => ({
  type: WRITE_POST,
  payload: {
    categoryId,
    title,
    body,
    tags,
    thumbnail,
  },
});

export const setOriginalPost = ({ post }: any) => ({
  type: SET_ORIGINAL_POST,
  payload: {
    post,
  },
});

export const updatePost = ({
  categoryId,
  postId,
  title,
  body,
  tags,
  thumbnail,
}: {
  categoryId: number;
  postId: number;
  title: string;
  body: string;
  tags: string[];
  thumbnail?: string;
}): updatePostDispatch => ({
  type: UPDATE_POST,
  payload: {
    categoryId,
    postId,
    body,
    title,
    tags,
    thumbnail,
  },
});

// writePost saga, updatePost saga 생성
const writePostSaga = createRequestSaga(WRITE_POST, PostApi.createPost, "post");
const updatePostSaga = createRequestSaga(
  UPDATE_POST,
  PostApi.updatePost,
  "post",
);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState: writeInitialStateType = {
  title: "",
  body: "",
  tags: [],
  thumbnail: undefined,
  categoryId: 0,
  post: null,
  postError: null,
  originalPostId: null,
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
    case SET_THUMBNAIL:
      return {
        ...state,
        thumbnail: action.payload.thumbnail,
      };
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
    case SET_ORIGINAL_POST:
      return {
        ...state,
        categoryId: action.payload.post.categoryId,
        title: action.payload.post.title,
        body: action.payload.post.body,
        tags: action.payload.post.tags,
        originalPostId: action.payload.post.id,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload.post,
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        postError: action.payload.postError,
      };
    default:
      return state;
  }
};

export default write;
