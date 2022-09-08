import { combineReducers } from "redux";

import loggedInReducer from "./loggedInReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  user: userReducer,
  loggedIn: loggedInReducer,
});
export default allReducers;
