export const NOT_FOUND = "error/NOT_FOUND" as const;
export const RESET = "error/RESET" as const;

export interface errorInitialStateType {
  errorType: "NOT_FOUND" | "CRASHED" | null;
}

export interface notFoundDispatch {
  type: typeof NOT_FOUND;
}

export interface resetDispatch {
  type: typeof RESET;
}

export type errorDispatchType = notFoundDispatch | resetDispatch;
