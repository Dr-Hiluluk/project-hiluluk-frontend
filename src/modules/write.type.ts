export const INITIALIZE = "write/INITIALIZE" as const;
export const CHANGE_FIELD = "write/CHANGE_FIELD" as const;

export interface initializeStateType {
  title: string;
  body: string;
  tags: string[];
}

export interface initializeDispatch {
  type: string;
  payload: any;
}

export interface changeFieldDispatch {
  type: string;
  payload: {
    key: string;
    value: string;
  };
}

export type WriteDispatchType = initializeDispatch | changeFieldDispatch;
