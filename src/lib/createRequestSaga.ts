import { call, put } from "redux-saga/effects";
import { finishLoading, startLoaidng } from "../modules/loading";

export const createRequestActionTypes = (type: string) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(
  type: string,
  request: any,
  stateName: string,
) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: any): any {
    yield put(startLoaidng(type)); // 로딩 시작
    let error = "";
    try {
      const response = yield call(request, action.payload);
      error = response;
      console.log("sagaAction:", action);
      console.log("sagaResponse:", response);
      yield put({
        type: SUCCESS,
        payload: {
          [stateName]: response.data,
        },
        meta: response,
      });
    } catch (e) {
      console.error("sagaError:", e);
      yield put({
        type: FAILURE,
        payload: {
          [`${stateName}Error`]: error,
        },
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
