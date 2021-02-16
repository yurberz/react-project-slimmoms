import React, {Component} from "react";
import {Link} from "react-router-dom";
import routes from "../../routes/routes";
import NavItem from "./navItem.js/NavItem";
import AppHeader from "./HeaderStyles";
///////////
import {logged} from "../../routes/LOGGED";

export default class Header extends Component {
    state = {
        showMenu: false,
    };

    menuHandler = () => {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu,
        }));
    };

    render() {
        return (
            <AppHeader>
                <nav>
                    <Link to="/" className="logo">
                        SlimMom
                    </Link>
                    {logged ? (
                        <>
                            <ul className="commonList onMainBar">
                                {routes.map(route => (
                                    <NavItem key={route.path} {...route} />
                                ))}
                            </ul>
                            <button className="menuButton" onClick={this.menuHandler}>
                                menu
                            </button>
                        </>
                    ) : (
                        <ul className="commonList">
                            {routes.map(route => (
                                <NavItem key={route.path} {...route} />
                            ))}
                        </ul>
                    )}
                </nav>
                {this.state.showMenu && (
                    <ul className="onSubBar">
                        {routes.map(route => (
                            <NavItem key={route.path} {...route} />
                        ))}
                    </ul>
                )}
            </AppHeader>
        );
    }
}
