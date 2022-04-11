import { takeLatest } from "redux-saga/effects";
import { AuthApi } from "../lib/api/auth";
import createRequestSaga from "../lib/createRequestSaga";
import {
  CHECK,
  CHECK_FAILURE,
  CHECK_SUCCESS,
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
const checkSaga = createRequestSaga(CHECK, AuthApi.check, "user");

function checkFailureSaga() {
  try {
    localStorage.removeItem("user");
  } catch (e) {
    console.log("localStorage is not working");
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
}

const initialState = {
  user: {
    id: -1,
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
      console.log("action:", action.payload);
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
    default:
      return state;
  }
};

export default user;
