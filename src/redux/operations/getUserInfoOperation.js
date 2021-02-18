import api from "../../services/api";
import getUserInfoActions from "../actions/getUserInfoActions";

const getUserInfo = () => (dispatch, getState) => {
  const {
    LogInReducer: { accesToken },
  } = getState();
  if (!accesToken) return;
  api.setToken(accesToken);

  dispatch(getUserInfoActions.getUserInfoRequest());

  api
    .getUserInfo()
    .then(({ data }) => dispatch(getUserInfoActions.getUserInfoSuccess(data)))
    .catch((error) =>
      dispatch(getUserInfoActions.getUserInfoError(error.message))
    );
};

export default getUserInfo;
