import axios from "axios";
import api from "../../services/api";
import getUserInfoActions from "../actions/getUserInfoActions";

// axios.defaults.baseURL = "https://slimmom-backend.goit.global";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDJjYmRiN2IzNThiNTNlYzhlYjIxNDUiLCJzaWQiOiI2MDJmNWI0ZWIzNThiNTNlYzhlYjJiYTYiLCJpYXQiOjE2MTM3MTYzMDIsImV4cCI6MTYxMzcxOTkwMn0.esy437GeSAqYAs8F198uuAd7qdw9FvLjpNYpIlJg6SY";

// axios.get("/user").then((res) => console.log(res.data));

const getUserInfo = () => async (dispatch, getState) => {
  const {
    LogInReducer: { accessToken },
  } = getState();

  if (!accessToken) return;
  api.setToken(accessToken);

  dispatch(getUserInfoActions.getUserInfoRequest());
  try {
    const { data } = await axios.get("/user");
    dispatch(getUserInfoActions.getUserInfoSuccess(data));
  } catch (error) {
    dispatch(getUserInfoActions.getUserInfoError(error));
  }
};

// const getUserInfo = () => (dispatch, getState) => {
//   const {
//     LogInReducer: { accessToken },
//   } = getState();
//   if (!accessToken) return;
//   api.setToken(accessToken);

//   dispatch(getUserInfoActions.getUserInfoRequest());

//   api
//     .getUserInfo()
//     .then(({ data }) => dispatch(getUserInfoActions.getUserInfoSuccess(data)))
//     .catch((error) => dispatch(getUserInfoActions.getUserInfoError(error)));
// };

export default getUserInfo;
