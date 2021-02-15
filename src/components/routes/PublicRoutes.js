import {Route, Redirect} from "react-router-dom";

///////////////////////
import {logged} from "../../routes/LOGGED";

const PublicRoutes = ({path, exact, component: CurrentComponent}) => {
    return logged
        ? <Redirect to="/diary" />
        : <Route path={path} exact={exact} component={CurrentComponent} />;
};

export default PublicRoutes;
