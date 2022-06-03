import { call, takeLatest } from "redux-saga/effects";
import { AuthApi } from "../lib/api/auth";
import createRequestSaga from "../lib/createRequestSaga";
import {
  CHECK,
  CHECK_FAILURE,
  CHECK_SUCCESS,
  LOGOUT,
  TEMP_SET_USER,
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

const checkSaga = createRequestSaga(CHECK, AuthApi.check, "user");

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
}

const initialState = {
  user: {
    id: 0,
    name: "",
    nickname: "",
  },
  userError: null,
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
    default:
      return state;
  }
};

export default user;
