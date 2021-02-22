import { createReducer } from "@reduxjs/toolkit";
import {
  clearState,
  toggleModal,
  getRecomendsSuccess,
} from "../actions/calcAction";

const initialState = {
  notAllowed: [],
  dailyRate: "",
  modal: false,
};

export const calcReducer = createReducer(
  { ...initialState },
  {
    [getRecomendsSuccess]: (state, action) => {
      return {
        ...state,
        dailyRate: Math.round(action.payload.dailyRate),
        notAllowed: [...action.payload.notAllowedProducts],
        modal: true,
      };
    },
    [toggleModal]: (state, action) => {
      return {
        ...initialState,
        modal: false,
      };
    },
    //======delet==========================
    [clearState]: (state, action) => {
      return { ...initialState };
    },
  }
);

export default calcReducer;
