const getDaySummary = (state) => state.userDiary.user.daySummary;
const getNotAllowrdProducts = (state) =>
  state.LogInReducer.user.userData.notAllowedProducts;
const getDailyRate = (state) => state.LogInReducer.user.userData.dailyRate;

export default { getDaySummary, getNotAllowrdProducts, getDailyRate };
