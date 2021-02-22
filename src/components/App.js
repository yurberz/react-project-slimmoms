import { Provider } from "react-redux";
import store from "../redux/store";
import { connect } from "react-redux";

import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layout/Layout";
import Header from "./header/Header";
import routes from "../routes/routes";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Spin from "./loader/Spin";
import { getLoading } from "../redux/selectors/spinSelector";

const App = ({ spin }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Suspense fallback={spin && <Spin />}>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={lazy(() =>
                import("../pages/Home" /* webpackChunkName: "HomePage"*/)
              )}
            />
            {routes.map((route) =>
              route.isPrivate ? (
                <PrivateRoutes key={route.path} {...route} />
              ) : (
                <PublicRoutes key={route.path} {...route} />
              )
            )}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Layout>
    </Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    spin: getLoading(state),
  };
};

export default connect(mapStateToProps, null)(App);
