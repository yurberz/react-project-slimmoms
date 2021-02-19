import { combineReducers } from "redux";
import userDiaryReducer from "./userDiaryReducer";
import RegisterReducer from "./registrerReducer";
import LogInReducer from "./logInReduser";
import calcReducer from "./calcReducer";
import summInfo from "./getUserInfoReducer";

const rootReducer = combineReducers({
  calculator: calcReducer,
  RegisterReducer,
  LogInReducer,
  userDiary: userDiaryReducer,
  getUserInfo: summInfo,
});

// const rootReducer = combineReducers({ RegisterReducer, LogInReducer });

export default rootReducer;
