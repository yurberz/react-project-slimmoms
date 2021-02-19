import { combineReducers } from "redux";
import userDiaryReducer from "./userDiaryReducer";
import RegisterReducer from "./registrerReducer";
import LogInReducer from "./logInReduser";
import calcReducer from "./calcReducer";
import { loadingReducer } from "./loadingReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
  calculator: calcReducer,
  RegisterReducer,
  LogInReducer,
  userDiary: userDiaryReducer,
  loading: loadingReducer,
  error: errorReducer,
});

// const rootReducer = combineReducers({ RegisterReducer, LogInReducer });

export default rootReducer;
