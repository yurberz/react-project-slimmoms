import { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Spin from "./loader/Spin";
import Layout from "./layout/Layout";
import Header from "./header/Header";
import routes from "../routes/routes";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { refreshToken } from "../redux/operations/logInOperation";
import { getLoading } from "../redux/selectors/spinSelector";

class App extends Component {
  componentDidMount() {
    const { refreshToken, isAuth } = this.props;
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
        {this.props.isLoading && <Spin />}
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
  isLoading: getLoading(state),
});

const mDTP = {
  refreshToken,
};

export default connect(mSTP, mDTP)(App);
