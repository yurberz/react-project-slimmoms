import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

const PublicRoutes = ({path, exact, component: CurrentComponent, logged}) => {
    return logged ? <Redirect to="/diary" /> : <Route path={path} exact={exact} component={CurrentComponent} />;
};

const mapStateToProps = state => ({
    logged: state.LogInReducer.accessToken,
});

export default connect(mapStateToProps)(PublicRoutes);
