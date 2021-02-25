import { combineReducers } from "redux";
import userDiaryReducer from "./userDiaryReducer";
import RegisterReducer from "./registrerReducer";
import LogInReducer from "./logInReduser";
import calcReducer from "./calcReducer";
import summInfo from "./getUserInfoReducer";
import { loadingReducer } from "./loadingReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
  calculator: calcReducer,
  RegisterReducer,
  LogInReducer,
  userDiary: userDiaryReducer,
  getUserInfo: summInfo,
  loading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;
