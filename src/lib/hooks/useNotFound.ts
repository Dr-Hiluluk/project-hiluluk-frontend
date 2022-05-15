import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../modules";
import { pageNotFoundAction, resetAction } from "../../modules/error";

export default function useNotFound() {
  const dispatch = useDispatch();
  const isNotFound = useSelector(
    ({ error }: ReducerType) => error.errorType === "NOT_FOUND",
  );

  const showNotFound: any = useCallback(
    () => dispatch(pageNotFoundAction()),
    [dispatch],
  );
  const reset: any = useCallback(() => dispatch(resetAction()), [dispatch]);

  return { isNotFound, showNotFound, reset };
}
