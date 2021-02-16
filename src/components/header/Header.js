import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import routes from "../../routes/routes";
import NavItem from "./navItem.js/NavItem";
import AppHeader from "./HeaderStyles";
import openMenu from "../../svg/open-menu.svg";
import closeMenu from "../../svg/close-menu.svg";

class Header extends Component {
    state = {
        showMenu: false,
    };

    menuToggler = () => {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu,
        }));
    };

    menuReset = () => {
        this.setState({
            showMenu: false,
        });
    };

    render() {
        return (
            <AppHeader>
                <nav>
                    {this.props.logged ? (
                        <>
                            <Link to="/" className="logo registeredLogo" onClick={this.menuReset}></Link>
                            <ul className="commonList onMainBar">
                                {routes.map(route => (
                                    <NavItem key={route.path} {...route} menuReset={this.menuReset} />
                                ))}
                            </ul>
                            <button className="menuButton" onClick={this.menuToggler}>
                                {this.state.showMenu ? <img src={closeMenu} alt="закрыть меню" /> : <img src={openMenu} alt="открыть меню" />}
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="logo" onClick={this.menuReset}></Link>
                            <ul className="commonList">
                                {routes.map(route => (
                                    <NavItem key={route.path} {...route} menuReset={this.menuReset} />
                                ))}
                            </ul>
                        </>
                    )}
                </nav>
                {this.state.showMenu && (
                    <ul className="onSubBar">
                        {routes.map(route => (
                            <NavItem key={route.path} {...route} menuReset={this.menuReset} />
                        ))}
                    </ul>
                )}
            </AppHeader>
        );
    }
}

const mapStateToProps = state => ({
    logged: state.LogInReducer.accessToken,
});

export default connect(mapStateToProps)(Header);
