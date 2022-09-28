import { ActionType } from "../action-types";
import { Action } from "../actions";
import { StatesInterface } from "../../Interfaces";

interface UserState {
  data: { username: string; email: string; error?: string };
}

const initialState: UserState = {
  data: {
    username: "",
    email: "",
  },
};

const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SETUSER:
      return { ...state, data: action.payload };
    case ActionType.CLEARUSER:
      return { ...state, data: initialState.data };
    case ActionType.SETERROR:
      return {
        ...state,
        data: {
          ...state.data,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
