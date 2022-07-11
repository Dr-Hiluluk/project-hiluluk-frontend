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
  userProfile: {
    id: number;
    name: string;
    nickname: string;
    thumbnail?: string;
    description?: string;
    posts?: any;
    memos?: any;
    password?: string;
  } | null;
  userProfileError: any;
}
export interface checkSuccessDispatch {
  type: typeof CHECK_SUCCESS;
  payload: {
    user: {
      id: number;
      name: string;
      nickname: string;
      thumbnail?: string;
      description?: string;
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
      thumbnail?: string;
      description?: string;
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
  | checkSuccessDispatch
  | checkFailureDispatch
  | logoutDispatch
  | getUserProfileSuccessDispatch
  | getUserProfileFailureDispatch
  | updateUserProfileSuccessDispatch
  | updateUserProfileFailureDispatch;
