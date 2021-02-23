import axios from "axios";
import api from "../../services/api";
import getUserInfoActions from "../actions/getUserInfoActions";

const getUserInfo = () => async (dispatch, getState) => {
  const accessToken = getState().LogInReducer.accessToken;
  api.setToken(accessToken);

  dispatch(getUserInfoActions.getUserInfoRequest());

  try {
    const { data } = await axios.get("/user");
    dispatch(getUserInfoActions.getUserInfoSuccess(data));
  } catch (error) {
    dispatch(getUserInfoActions.getUserInfoError(error.message));
  }
};

export default getUserInfo;
