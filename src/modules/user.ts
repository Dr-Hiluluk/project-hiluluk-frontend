import { call, takeLatest } from "redux-saga/effects";
import { AuthApi } from "../lib/api/auth";
import UserApi from "../lib/api/user";
import createRequestSaga from "../lib/createRequestSaga";
import {
  CHECK,
  CHECK_FAILURE,
  CHECK_SUCCESS,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  LOGOUT,
  TEMP_SET_USER,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_SUCCESS,
  UserDispatchType,
  userInitialStateType,
} from "./user.type";

export const tempSetUser = (user: any) => ({
  type: TEMP_SET_USER,
  payload: {
    user,
  },
});
export const check = () => ({ type: CHECK });
export const logout = () => ({ type: LOGOUT });

export const getUserProfile = (nickname: string) => ({
  type: GET_USER_PROFILE,
  payload: {
    nickname,
  },
});

export const updateUserProfile = ({
  userId,
  description,
  thumbnail,
  password,
}: {
  userId: number;
  description?: string;
  thumbnail?: string;
  password?: string;
}) => ({
  type: UPDATE_USER_PROFILE,
  payload: {
    userId,
    description,
    thumbnail,
    password,
  },
});

const checkSaga = createRequestSaga(CHECK, AuthApi.check, "user");
const getUserProfileSaga = createRequestSaga(
  GET_USER_PROFILE,
  UserApi.getUserProfile,
  "userProfile",
);
const updateUserProfileSage = createRequestSaga(
  UPDATE_USER_PROFILE,
  UserApi.updateUserProfile,
  "user",
);

function* logoutSaga() {
  try {
    yield call(AuthApi.logout);
    localStorage.removeItem("user");
  } catch (e) {
    console.error(e);
  }
}

function checkFailureSaga() {
  try {
    localStorage.removeItem("user");
  } catch (e) {
    console.error("localStorage is not working");
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(GET_USER_PROFILE, getUserProfileSaga);
  yield takeLatest(UPDATE_USER_PROFILE, updateUserProfileSage);
}

const initialState: userInitialStateType = {
  user: null,
  userError: null,
  userProfile: null,
  userProfileError: null,
};

const user = (
  state: userInitialStateType = initialState,
  action: UserDispatchType,
): userInitialStateType => {
  switch (action.type) {
    case TEMP_SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case CHECK_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        userError: null,
      };
    case CHECK_FAILURE:
      return {
        ...state,
        user: initialState.user,
        userError: action.payload.error,
      };
    case LOGOUT:
      return {
        ...state,
        user: initialState.user,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload.userProfile,
      };
    case GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        userProfileError: action.payload.userProfileError,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        userError: action.payload.userError,
      };
    default:
      return state;
  }
};

export default user;
