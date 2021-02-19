import { createAction } from "@reduxjs/toolkit";

export const signIn = createAction("@SIGNIN");

export const setErrorr = createAction("@SETERRORR");

//=====================
export const chngRecomends = createAction("@CHNGUSERRECOMENDS");
export const chngParams = createAction("@CHNGUSEPARAMS");
