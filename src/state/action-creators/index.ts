import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { Action } from "../actions";

export const setUserDetails = (data: { username: string; email: string }) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETUSER,
      payload: data,
    });
  };
};
export const clearUserDetails = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLEARUSER,
    });
  };
};
export const setUserError = (error: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETERROR,
      payload: error,
    });
  };
};
export const login = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CHANGESTATUS,
    });
  };
};
export const logout = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CHANGESTATUS,
    });
  };
};
