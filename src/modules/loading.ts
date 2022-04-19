import {
  FINISH_LOADING,
  LoadingDispatchType,
  START_LOADING,
} from "./loading.type";

export const startLoaidng = (requestType: any) => ({
  type: START_LOADING,
  payload: requestType,
});

export const finishLoading = (requestType: any) => ({
  type: FINISH_LOADING,
  payload: requestType,
});

const initialState = {};

const loading = (
  state: any = initialState,
  action: LoadingDispatchType,
): any => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, [action.payload]: true };
    case FINISH_LOADING:
      return { ...state, [action.payload]: false };
    default:
      return state;
  }
};

export default loading;
