import {NavLink} from "react-router-dom";
import routes from "../../routes/routes";
import NavItem from "./navItem.js/NavItem";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink to="/" exact={true} className="link" activeClassName="active-link">
                        SlimMom
                    </NavLink>
                    {routes.map(route => (
                        <NavItem key={route.path} {...route} />
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
