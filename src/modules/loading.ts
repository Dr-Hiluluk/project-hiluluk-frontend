const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoaidng = (requestType: any) => ({
  type: START_LOADING,
  requestType,
});

export const finishLoading = (requestType: any) => ({
  type: FINISH_LOADING,
  requestType,
});

const initialState = {};

const loading = (state: any = initialState, action: any): any => {
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
