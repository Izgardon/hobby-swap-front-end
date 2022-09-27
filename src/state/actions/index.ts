import { ActionType } from "../action-types";

interface SetUserAction {
  type: ActionType.SETUSER;
  payload: { username: string; email: string };
}

interface ClearUserAction {
  type: ActionType.CLEARUSER;
}

interface SetErrorAction {
  type: ActionType.SETERROR;
  payload: string;
}

interface ChangeStatus {
  type: ActionType.CHANGESTATUS;
}
export type Action =
  | SetUserAction
  | SetErrorAction
  | ClearUserAction
  | ChangeStatus;
