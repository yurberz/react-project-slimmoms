import { combineReducers } from "redux";
import RegisterReducer from "./registrerReducer";
import LogInReducer from "./logInReduser";

const rootReducer = combineReducers({ RegisterReducer, LogInReducer });

export default rootReducer;
