import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const NavItem = ({path, exact, name, isPrivate, menuReset, logged}) => {
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

const mapStateToProps = state => ({
    logged: state.LogInReducer.accessToken,
});

export default connect(mapStateToProps)(NavItem);
