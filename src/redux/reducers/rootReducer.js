import { combineReducers } from "redux";
import userDiaryReducer from "./userDiaryReducer"
import RegisterReducer from "./registrerReducer";
import LogInReducer from "./logInReduser";
import calcReducer from "./calcReducer";

const rootReducer = combineReducers({
  calculator: calcReducer,
  RegisterReducer,
  LogInReducer,
  userDiary: userDiaryReducer,
});

// const rootReducer = combineReducers({ RegisterReducer, LogInReducer });

export default rootReducer;
