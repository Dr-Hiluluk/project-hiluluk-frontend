import { call, put } from "redux-saga/effects";
import { finishLoading, startLoaidng } from "../modules/loading";

export const createRequestActionTypes = (type: string) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: any): any {
    yield put(startLoaidng(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      console.log("sagaAction:", action);
      console.log("sagaResponse:", response);
      yield put({
        type: SUCCESS,
        payload: {
          auth: response.data,
        },
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: {
          authError: e,
        },
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
