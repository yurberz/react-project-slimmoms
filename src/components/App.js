import { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout/Layout";
import Header from "./header/Header";
import routes from "../routes/routes";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { refreshToken } from "../redux/operations/logInOperation";

class App extends Component {
  componentDidMount() {
    const { refreshToken, isAuth } = this.props;
    console.log("log from App:", typeof refreshToken);
    isAuth && refreshToken();
  }

  // componentDidUpdate(prevProps, _) {
  //   if (
  //     prevProps.daySummary !== this.props.daySummary ||
  //     prevProps.notAllowedProducts !== this.props.notAllowedProducts
  //   ) {
  //     this.props.getUserInfo();
  //   }
  // }

  render() {
    return (
      <Layout>
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
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
    );
  }
}

const mSTP = (state) => ({
  isAuth: state.LogInReducer.accessToken,
});

const mDTP = {
  refreshToken,
};

export default connect(mSTP, mDTP)(App);
