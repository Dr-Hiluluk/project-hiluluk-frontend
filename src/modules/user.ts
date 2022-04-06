import createRequestSaga from "../lib/createRequestSaga";
import { CHECK, TEMP_SET_USER } from "./user.type";

export const tempSetUser = (user: any) => ({
  type: TEMP_SET_USER,
  payload: {
    user,
  },
});

export const check = () => ({ type: CHECK });
