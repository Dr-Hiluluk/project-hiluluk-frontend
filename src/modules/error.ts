import {
  errorDispatchType,
  errorInitialStateType,
  NOT_FOUND,
  RESET,
} from "./error.type";

export const pageNotFoundAction = () => ({ type: NOT_FOUND });

export const resetAction = () => ({ type: RESET });

const initialState: errorInitialStateType = {
  errorType: null,
};

const error = (
  state: errorInitialStateType = initialState,
  action: errorDispatchType,
): errorInitialStateType => {
  switch (action.type) {
    case NOT_FOUND:
      console.log("NOT_FOUND:", state);
      return {
        errorType: "NOT_FOUND",
      };
    case RESET:
      console.log("RESET:", state);
      return {
        errorType: null,
      };
    default:
      return state;
  }
};

export default error;
