export const CHANGE_FIELD = "auth/CHANGE_FIELD" as const;
export const INITIALIZE_FROM = "auth/INITIALIZE_FORM" as const;
export const REGISTER = "auth/REGISTER" as const;
export const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS" as const;
export const REGISTER_FAILURE = "auth/REGISTER_FAILURE" as const;
export const LOGIN = "auth/LOGIN" as const;
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "auth/LOGIN_FAILURE" as const;

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
  authError?: string;
}

export interface changeFieldDispatch {
  type: typeof CHANGE_FIELD;
  payload: {
    form: string;
    key: string;
    value: string;
  };
}

export interface initializeFormDispatch {
  type: typeof INITIALIZE_FROM;
  payload: {
    form: string;
  };
}

export interface registerFailDispatch {
  type: typeof REGISTER_FAILURE;
  payload: {
    authError?: string;
  };
}

export interface registerSuccessDispatch {
  type: typeof REGISTER_SUCCESS;
  payload: {
    auth: any;
  };
}
export interface loginFailDispatch {
  type: typeof LOGIN_FAILURE;
  payload: {
    authError?: string;
  };
}

export interface loginSuccessDispatch {
  type: typeof LOGIN_SUCCESS;
  payload: {
    auth: any;
  };
}

export type AuthDispatchType =
  | changeFieldDispatch
  | initializeFormDispatch
  | registerFailDispatch
  | registerSuccessDispatch
  | loginFailDispatch
  | loginSuccessDispatch;
