import { combineReducers } from "redux";
import calcReducer from "./calcReducer";

const rootReducer = combineReducers({
  calculator: calcReducer,
});

export default rootReducer;
