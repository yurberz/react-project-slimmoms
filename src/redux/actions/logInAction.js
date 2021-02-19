import { createAction } from "@reduxjs/toolkit";

export const signIn = createAction("@SIGNIN");

export const setErrorr = createAction("@SETERRORR");

//=====================
export const chngRecomends = createAction("@CHNGUSERRECOMENDS");
export const chngParams = createAction("@CHNGUSEPARAMS");

export const newTknRequest = createAction("logIn/newTknRequest");
export const newTknSuccess = createAction("logIn/newTknSuccess");
export const newTknError = createAction("logIn/newTknError");
