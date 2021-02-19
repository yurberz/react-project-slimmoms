import axios from "axios";

class slimMomApi {
  constructor() {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  }
  // "auth" end-points
  register(newUser) {
    return axios
      .post("/auth/register", newUser)
      .then((res) => res.data)
      .catch((error) => error.message);
  }

  logIn(userCredentials) {
    return axios
      .post("/auth/login", userCredentials)
      .then((res) => res.data)
      .catch((error) => error.message);
  }

  logOut() {
    return axios.post("/auth/logout");
  }

  refresh(sid) {
    return axios.post("/auth/refresh", sid);
  }

  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  unsetToken() {
    axios.defaults.headers.common.Authorization = ``;
  }
  //===

  //"product-search" end-point
  searchProduct(query) {
    return axios
      .get(`/product?search=${query}`)
      .then((res) => res.data)
      .catch((error) => error);
  }
  //===

  //"daily-rate" end-points
  getDailyRate(userCharacteristics, id) {
    if (id) {
      return axios
        .post(`/daily-rate/${id}`, userCharacteristics)
        .then((res) => res.data)
        .catch((error) => error);
    }
    return axios
      .post("/daily-rate/", userCharacteristics)
      .then((res) => res.data)
      .catch((error) => error);
  }
  //===

  //"day" end-points
  addEatenProduct(product) {
    return axios
      .post("/day", product)
      .then((res) => res.data)
      .catch((error) => error);
  }

  delEatenProduct(product) {
    return axios
      .delete("/day", product)
      .then((res) => res.data)
      .catch((error) => error);
  }

  getProducts(date) {
    return axios
      .post("/day/info", date)
      .then((res) => res.data)
      .catch((error) => error);
  }
  //===

  //"user" end-point
  getUserInfo() {
    return axios
      .get("/user")
      .then((res) => res.data)
      .catch((error) => error);
  }
  //===
}

export default new slimMomApi();
