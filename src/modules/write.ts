import produce from "immer";
import {
  CHANGE_FIELD,
  INITIALIZE,
  initializeStateType,
  WriteDispatchType,
} from "./write.type";

export const initialize = () => ({ type: INITIALIZE });
export const changeField = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => ({ type: CHANGE_FIELD, key, value });

const initialState = {
  title: "",
  body: "",
  tags: [],
};

const write = (
  state: initializeStateType = initialState,
  action: WriteDispatchType,
): initializeStateType => {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case CHANGE_FIELD:
      return produce(state, (draft) => {
        draft[action.payload.key as keyof initializeStateType] =
          action.payload.value;
      });
    default:
      return initialState;
  }
};

export default write;
