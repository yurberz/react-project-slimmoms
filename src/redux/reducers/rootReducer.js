import { combineReducers } from "redux";
import userDiaryReducer from "./userDiaryReducer"

const rootReducer = combineReducers({
    userDiary: userDiaryReducer
});

export default rootReducer;
