export const START_LOADING = "loading/START_LOADING" as const;
export const FINISH_LOADING = "loading/FINISH_LOADING" as const;

interface startLoaidngDispatch {
  type: typeof START_LOADING;
  payload?: any;
}

interface finishLoaidngDispatch {
  type: typeof FINISH_LOADING;
  payload?: any;
}

export type LoadingDispatchType = startLoaidngDispatch | finishLoaidngDispatch;
