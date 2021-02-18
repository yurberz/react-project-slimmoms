import { combineReducers } from "redux";
import RegisterReducer from "./registrerReducer";
import LogInReducer from "./logInReduser";
import calcReducer from "./calcReducer";

const rootReducer = combineReducers({
  calculator: calcReducer,
  RegisterReducer,
  LogInReducer,
});

// const rootReducer = combineReducers({ RegisterReducer, LogInReducer });

export default rootReducer;
