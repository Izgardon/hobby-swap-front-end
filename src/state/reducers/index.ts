import { combineReducers } from "redux";

import loggedInReducer from "./loggedInReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
  loggedIn: loggedInReducer,
});
export default reducers;

export type State = ReturnType<typeof reducers>;
