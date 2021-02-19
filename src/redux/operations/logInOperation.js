import axios from "axios";
import {
  signIn,
  setErrorr,
  chngParams,
  chngRecomends,
  newTknSuccess,
  newTknError,
  newTknRequest,
} from "../actions/logInAction";
import { logOut } from "../actions/logOutAction";
import slimMomApi from "../../services/api";
import getUserInfo from "./getUserInfoOperation";

const logInOperation = (user) => async (dispatch) => {
  try {
    const response = await slimMomApi.logIn({ ...user });

    slimMomApi.setToken(response.accessToken);

    if (response === "Request failed with status code 403") {
      dispatch(setErrorr(response));
    } else {
      dispatch(signIn(response));
      dispatch(getUserInfo());
    }
  } catch (error) {
    // dispatch(setErrorr(error));
  } finally {
    // dispatch(setLoading());
  }
};
// ====================================================
const chngUserParam = (userInfo, id) => async (dispatch) => {
  dispatch(chngParams(userInfo));
  try {
    const response = await slimMomApi.getDailyRate(userInfo, id);
    if (response === "No token provided") {
      dispatch(setErrorr(response));
    } else {
      dispatch(chngParams(response));
    }
  } finally {
    // dispatch(setLoading());
  }
};

const refreshToken = () => async (dispatch, getState) => {
  const accessToken = getState().LogInReducer.accessToken;
  console.log(accessToken);
  slimMomApi.setToken(accessToken);

  const sid = getState().LogInReducer.sid;

  dispatch(newTknRequest());

  try {
    const res = await axios.post("/auth/refresh", { sid });

    await slimMomApi.setToken(res.data.newAccessToken);
    dispatch(newTknSuccess(res.data));
    await dispatch(getUserInfo());
  } catch (error) {
    dispatch(newTknError(error.message));
    dispatch(logOut());
  }
};

console.log(typeof refreshToken);

export { logInOperation, chngUserParam, refreshToken };
