export const TEMP_SET_USER = "user/TEMP_SET_USER" as const;
export const CHECK = "user/CHECK" as const;
export const CHECK_SUCCESS = "user/CHECK_SUCCESS" as const;
export const CHECK_FAILURE = "user/CHECK_FAILURE" as const;
export const LOGOUT = "user/LOGOUT" as const;
export interface userInitialStateType {
  user: {
    id: number;
    name: string;
    nickname: string;
    thumbnail?: string;
  } | null;
  userError: null;
}

export interface tempSetUserDispatch {
  type: typeof TEMP_SET_USER;
  payload: {
    user: {
      id: number;
      name: string;
      nickname: string;
    };
  };
}

export interface checkSuccessDispatch {
  type: typeof CHECK_SUCCESS;
  payload: {
    user: {
      id: number;
      name: string;
      nickname: string;
    };
  };
}

export interface checkFailureDispatch {
  type: typeof CHECK_FAILURE;
  payload: {
    error: any;
  };
}

export interface logoutDispatch {
  type: typeof LOGOUT;
  payload: {
    user: {
      id: number;
      name: string;
      nickname: string;
    };
  };
}

export type UserDispatchType =
  | tempSetUserDispatch
  | checkSuccessDispatch
  | checkFailureDispatch
  | logoutDispatch;
