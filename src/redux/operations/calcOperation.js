import slimMomApi from "../../services/api";
import {
  getRecomends,
  setError,
  setLoading,
  setUserInfo,
} from "../actions/calcAction";

const getReccomendation = (userInfo, id) => async (dispatch) => {
  // dispatch(setLoading);
  dispatch(setUserInfo(userInfo));
  try {
    const response = await slimMomApi.getDailyRate(userInfo, id);
    dispatch(getRecomends(response));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    // dispatch(setLoading);
  }
};

export default getReccomendation;
