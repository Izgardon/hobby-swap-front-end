import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { Action } from "../actions";

import { StatesInterface } from "../../Interfaces";

export const setUserDetails = (data: StatesInterface["UserState"]) => {
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
