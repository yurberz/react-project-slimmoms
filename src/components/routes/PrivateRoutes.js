import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRoutes = ({path, exact, component: CurrentComponent, logged}) => {
    return logged ? <Route path={path} exact={exact} component={CurrentComponent} /> : <Redirect to="/login" />;
};

const mapStateToProps = state => ({
    logged: state.LogInReducer.accessToken,
});

export default connect(mapStateToProps)(PrivateRoutes);
