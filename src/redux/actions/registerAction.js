import { createAction } from "@reduxjs/toolkit";

// export const signUp = (user) => ({
//   type: "@SIGNUP",
//   payload: { ...user },
// });

// export const signUp = (user) => ({ type: "@SIGNUP", payload: user });

export const signUp = createAction("@SIGNUP");

export const setError = createAction("@SETERROR");
