import { combineReducers } from "redux";
import userDiaryReducer from "./userDiaryReducer"
import RegisterReducer from "./registrerReducer";
import LogInReducer from "./logInReduser";

const rootReducer = combineReducers({ RegisterReducer, LogInReducer, userDiary: userDiaryReducer });

export default rootReducer;
