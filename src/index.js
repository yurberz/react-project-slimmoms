import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./base.css";
import "./fonts/GothamPro-Bold.woff";
import "./fonts/GothamPro-Light.woff";
import "./fonts/GothamPro.woff";
import "./fonts/Verdana-Bold.woff";
import "./fonts/Verdana.woff";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
