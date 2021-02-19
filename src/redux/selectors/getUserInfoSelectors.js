const getDaySummary = (state) => state.getUserInfo.user.currentDayInfo;
const getNotAllowrdProducts = (state) =>
  state.getUserInfo.user.userData.notAllowedProducts;

export default { getDaySummary, getNotAllowrdProducts };
