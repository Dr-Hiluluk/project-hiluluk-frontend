import { takeLatest } from "redux-saga/effects";
import { AuthApi } from "../lib/api/auth";
import createRequestSaga from "../lib/createRequestSaga";
import {
  CHECK,
  CHECK_FAILURE,
  CHECK_SUCCESS,
  TEMP_SET_USER,
  UserDispatchType,
} from "./user.type";

export const tempSetUser = (user: any) => ({
  type: TEMP_SET_USER,
  payload: {
    user,
  },
});

export const check = () => ({ type: CHECK });
const checkSaga = createRequestSaga(CHECK, AuthApi.check, "user");

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

interface userInitialStateType {
  user: {
    id: number;
    name: string;
    nickname: string;
  };
  userError: null;
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
    default:
      return state;
  }
};

export default user;
