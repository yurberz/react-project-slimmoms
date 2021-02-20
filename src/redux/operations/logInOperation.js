import axios from "axios";
import {
  signIn,
  setErrorr,
  chngParams,
  chngRecomends,
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
import { setLoading } from "../actions/loadingAction";

const logInOperation = (user) => async (dispatch) => {
  dispatch(setLoading());
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
    dispatch(setLoading());
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
    await dispatch(getUserInfo());
  } catch (error) {
    dispatch(newTknError(error.message));
    dispatch(logOut());
  }
};

export { logInOperation, chngUserParam, refreshToken };
