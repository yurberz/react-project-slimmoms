import {Route, Redirect} from "react-router-dom";

///////////////////////
import {logged} from "../../routes/LOGGED";

const PrivateRoutes = ({path, exact, component: CurrentComponent}) => {
    return logged
        ? <Route path={path} exact={exact} component={CurrentComponent} />
        : <Redirect to="/login" />;
};

export default PrivateRoutes;
