export const TEMP_SET_USER = "user/TEMP_SET_USER" as const;
export const CHECK = "user/CHECK" as const;
export const CHECK_SUCCESS = "user/CHECK_SUCCESS" as const;
export const CHECK_FAILURE = "user/CHECK_FAILURE" as const;
export const LOGOUT = "user/LOGOUT" as const;
export const GET_USER_PROFILE = "user/GET_USER_PROFILE" as const;
export const GET_USER_PROFILE_SUCCESS =
  "user/GET_USER_PROFILE_SUCCESS" as const;
export const GET_USER_PROFILE_FAILURE =
  "user/GET_USER_PROFILE_FAILURE" as const;
export const UPDATE_USER_PROFILE = "user/UPDATE_USER_PROFILE" as const;
export const UPDATE_USER_PROFILE_SUCCESS =
  "user/UPDATE_USER_PROFILE_SUCCESS" as const;
export const UPDATE_USER_PROFILE_FAILURE =
  "user/UPDATE_USER_PROFILE_FAILURE" as const;
export interface userInitialStateType {
  user: {
    id: number;
    name: string;
    nickname: string;
    thumbnail?: string;
    description?: string;
  } | null;
  userError: null;
  userProfile: any;
  userProfileError: any;
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

export interface getUserProfileSuccessDispatch {
  type: typeof GET_USER_PROFILE_SUCCESS;
  payload: {
    userProfile: any;
  };
}

export interface getUserProfileFailureDispatch {
  type: typeof GET_USER_PROFILE_FAILURE;
  payload: {
    userProfileError: any;
  };
}

export interface updateUserProfileSuccessDispatch {
  type: typeof UPDATE_USER_PROFILE_SUCCESS;
  payload: {
    user: userInitialStateType["user"];
  };
}
export interface updateUserProfileFailureDispatch {
  type: typeof UPDATE_USER_PROFILE_FAILURE;
  payload: {
    userError: any;
  };
}

export type UserDispatchType =
  | tempSetUserDispatch
  | checkSuccessDispatch
  | checkFailureDispatch
  | logoutDispatch
  | getUserProfileSuccessDispatch
  | getUserProfileFailureDispatch
  | updateUserProfileSuccessDispatch
  | updateUserProfileFailureDispatch;
