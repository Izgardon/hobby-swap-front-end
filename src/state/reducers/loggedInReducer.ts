import { Action } from "../actions";
import { ActionType } from "../action-types";

const initialState = false;

const loggedInReducer = (state: boolean = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGESTATUS:
      return !state;

    default:
      return state;
  }
};

export default loggedInReducer;
