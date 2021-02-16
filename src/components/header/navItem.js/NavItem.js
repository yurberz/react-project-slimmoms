import {NavLink} from "react-router-dom";
///////////
import {logged} from "../../../routes/LOGGED";

const NavItem = ({path, exact, name, isPrivate}) => {
    return (
        <>
            {!logged && !isPrivate && (
                <li>
                    <NavLink to={path} exact={exact} className="link" activeClassName="active-link">
                        {name}
                    </NavLink>
                </li>
            )}

            {logged && isPrivate && (
                <li>
                    <NavLink to={path} exact={exact} className="link" activeClassName="active-link">
                        {name}
                    </NavLink>
                </li>
            )}
        </>
    );
};

export default NavItem;
