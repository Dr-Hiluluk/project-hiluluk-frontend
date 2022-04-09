import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import { AuthApi } from "../lib/api/auth";
import createRequestSaga from "../lib/createRequestSaga";
import {
  AuthDispatchType,
  CHANGE_FIELD,
  INITIALIZE_FROM,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "./auth.type";

export const changeField = ({
  form,
  key,
  value,
}: {
  form: string;
  key: string;
  value: string;
}) => ({
  type: CHANGE_FIELD,
  payload: {
    form,
    key,
    value,
  },
});
// export const changeField = createAction(
//   CHANGE_FIELD,
//   ({ form, key, value }: ChangeFieldType["payload"]) => ({
//     form,
//     key,
//     value,
//   }),
// );

export const initializeForm = ({ form }: { form: string }) => ({
  type: INITIALIZE_FROM,
  payload: {
    form,
  },
});

export const register = ({
  email,
  password,
  name,
  nickname,
}: {
  email: string;
  password: string;
  name: string;
  nickname: string;
}) => ({
  type: REGISTER,
  payload: {
    email,
    password,
    name,
    nickname,
  },
});
export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

// 사가 생성
const registerSaga = createRequestSaga(REGISTER, AuthApi.register, "auth");
const loginSaga = createRequestSaga(LOGIN, AuthApi.login, "auth");
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

export interface AuthInitialStateType {
  register: {
    name: string;
    nickname: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    email: string;
    password: string;
  };
  auth: any;
  authError: any;
}

const initialState: AuthInitialStateType = {
  register: {
    name: "",
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    email: "",
    password: "",
  },
  auth: null,
  authError: null,
};

// type AuthActionType =
//   | ReturnType<typeof changeField>
//   | ReturnType<typeof initializeForm>
//   | ReturnType<typeof register>
//   | ReturnType<typeof login>;

export type AuthReducerType = ReturnType<typeof auth>;

const auth = (
  state: AuthInitialStateType = initialState,
  action: AuthDispatchType,
): AuthInitialStateType => {
  switch (action.type) {
    case CHANGE_FIELD:
      return produce(state, (draft: any) => {
        draft[action.payload.form][action.payload.key] = action.payload.value;
      });
    case INITIALIZE_FROM:
      return produce(state, (draft: any) => {
        draft[action.payload.form] =
          initialState[action.payload.form as keyof AuthInitialStateType];
      });
    case REGISTER_SUCCESS:
      return {
        ...state,
        authError: null,
        auth: action.payload.auth,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        authError: action.payload.authError,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
        auth: action.payload.auth,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authError: action.payload.authError,
      };
    default:
      return state;
  }
};

export default auth;
