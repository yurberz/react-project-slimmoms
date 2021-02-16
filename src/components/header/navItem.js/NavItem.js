import {NavLink} from "react-router-dom";
///////////
import {logged} from "../../../routes/LOGGED";

const NavItem = ({path, exact, name, isPrivate, menuReset}) => {
    return (
        <>
            {!logged && !isPrivate && (
                <li>
                    <NavLink to={path} exact={exact} className="link" activeClassName="active-link" onClick={menuReset}>
                        {name}
                    </NavLink>
                </li>
            )}

            {logged && isPrivate && (
                <li>
                    <NavLink to={path} exact={exact} className="link" activeClassName="active-link" onClick={menuReset}>
                        {name}
                    </NavLink>
                </li>
            )}
        </>
    );
};

export default NavItem;
