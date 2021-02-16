import { lazy } from "react";

const routes = [
  {
    name: "ВХОД",
    path: "/login",
    exact: true,
    component: lazy(() =>
      import("../pages/Login" /* webpackChunkName: "LoginPage"*/)
    ),
    isPrivate: false,
  },
  {
    name: "РЕГИСТРАЦИЯ",
    path: "/registration",
    exact: true,
    component: lazy(() =>
      import("../pages/Registration" /* webpackChunkName: "RegistrationPage"*/)
    ),
    isPrivate: false,
  },
  {
    name: "КАЛЬКУЛЯТОР",
    path: "/calculator",
    exact: true,
    component: lazy(() =>
      import("../pages/CalculatorPage" /* webpackChunkName: "CalculatorPage"*/)
    ),
    isPrivate: true,
  },
  {
    name: "ДНЕВНИК",
    path: "/diary",
    exact: true,
    component: lazy(() =>
      import("../pages/Diary" /* webpackChunkName: "DiaryPage"*/)
    ),
    isPrivate: true,
  },
];

export default routes;
