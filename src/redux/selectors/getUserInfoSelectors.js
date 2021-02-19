const getDaySummary = (state) => state.getUserInfo.user.days;
const getNotAllowrdProducts = (state) =>
  state.getUserInfo.user.userData.notAllowedProducts;

export default { getDaySummary, getNotAllowrdProducts };
