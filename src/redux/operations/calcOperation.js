import slimMomApi from "../../services/api";
import {
  getRecomendsRequest,
  getRecomendsError,
  getRecomendsSuccess,
} from "../actions/calcAction";

const getReccomendation = (userInfo, id) => async (dispatch) => {
  dispatch(getRecomendsRequest());
  try {
    const response = await slimMomApi.getDailyRate(userInfo, id);
    dispatch(getRecomendsSuccess(response));
  } catch (error) {
    dispatch(getRecomendsError(error.message));
  }
};

export default getReccomendation;
