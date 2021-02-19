import { createAction } from "@reduxjs/toolkit";

export const signIn = createAction("@SIGN_IN");

export const setErrorr = createAction("@SET_ERRORR");

//=====================

export const chngRecomends = createAction("@CHNGUSERRECOMENDS");
export const chngParams = createAction("@CHNGUSEPARAMS");

export const newTknRequest = createAction("logIn/newTknRequest");
export const newTknSuccess = createAction("logIn/newTknSuccess");
export const newTknError = createAction("logIn/newTknError");

export const chngParams = createAction("@CHNG_USER_PARAMS");
export const chngRecomendsRequest = createAction("@CHNG_RECOMENDS_REQUEST");
export const chngRecomendsSuccess = createAction("@CHNG_RECOMENDS_SUCCESS");
export const chngRecomendseError = createAction("@CHNG_RECOMENDS_ERROR");

