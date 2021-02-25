import axios from "axios";
import {
  signIn,
  setErrorr,
  chngParams,
  newTknSuccess,
  newTknError,
  newTknRequest,
  chngRecomendsRequest,
  chngRecomendsSuccess,
  chngRecomendseError,
} from "../actions/logInAction";
import { logOut } from "../actions/logOutAction";
import slimMomApi from "../../services/api";
import getUserInfo from "./getUserInfoOperation";
import { getCurentDayInfoOperation } from "./diaryOperations";

const logInOperation = (user) => async (dispatch) => {
  dispatch(chngRecomendsRequest());

  try {
    const response = await slimMomApi.logIn({ ...user });
    slimMomApi.setToken(response.accessToken);
    dispatch(signIn(response));
    dispatch(refreshToken());
    dispatch(getUserInfo());
    dispatch(getCurentDayInfoOperation());
  } catch (error) {
    dispatch(setErrorr(error.message));
  } finally {
    dispatch(chngRecomendsSuccess());
  }
};
// ====================================================
const chngUserParam = (userInfo, id) => async (dispatch) => {
  dispatch(chngRecomendsRequest());
  dispatch(chngParams(userInfo));
  try {
    const response = await slimMomApi.getDailyRate(userInfo, id);
    dispatch(chngRecomendsSuccess(response));
  } catch {
    dispatch(chngRecomendseError());
  }
};

const refreshToken = () => async (dispatch, getState) => {
  const accessToken = getState().LogInReducer.accessToken;
  slimMomApi.setToken(accessToken);

  const sid = getState().LogInReducer.sid;

  dispatch(newTknRequest());

  try {
    const res = await axios.post("/auth/refresh", { sid });

    await slimMomApi.setToken(res.data.newAccessToken);
    dispatch(newTknSuccess(res.data));
  } catch (error) {
    dispatch(newTknError(error.message));
    dispatch(logOut());
  }
};

export { logInOperation, chngUserParam, refreshToken };
