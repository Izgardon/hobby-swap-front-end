import { Dispatch } from "redux";
import { Action } from "../State/actions";

export interface StatesInterface {
  UserState: { username: string; email: string; error?: string };
}

export interface StatesActionsInterface {
  setUserDetails?: (data: StatesInterface["UserState"]) => Dispatch<Action>;
  clearUserDetails?: () => Dispatch<Action>;
}
