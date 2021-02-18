import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import routes from "../../routes/routes";
import NavItem from "./navItem.js/NavItem";
import AppHeader from "./HeaderStyles";
import openMenu from "../../svg/open-menu.svg";
import closeMenu from "../../svg/close-menu.svg";
import {logOut} from "../../redux/actions/logOutAction";
/////////////////
// import { addNewProductOperation } from "../../redux/operations/diaryOperations";

class Header extends Component {
    state = {
        showMenu: false,
    };

    menuToggler = () => {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu,
        }));
        /////////
        // const product = {
        //     date: "2020-12-31",
        //     productId: "5d51694802b2373622ff552c",
        //     weight: 100,
        // }
        // this.props.addNewProductOperation(product);
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
                            <div className="mainBarSubContainer">
                                <Link to="/" className="logo registeredLogo" onClick={this.menuReset}></Link>
                                <ul className="commonList onMainBarList">
                                    {routes.map(route => (
                                        <NavItem key={route.path} {...route} menuReset={this.menuReset} />
                                    ))}
                                </ul>
                            </div>
                            <div className="mainBarSubContainer">
                                <div className="userInfo onMainBarInfo">
                                    <p>{this.props.userName}</p>
                                    <button onClick={this.props.logOut}>Выйти</button>
                                </div>
                                <button className="menuButton" onClick={this.menuToggler}>
                                    {this.state.showMenu ? <img src={closeMenu} alt="закрыть меню" /> : <img src={openMenu} alt="открыть меню" />}
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="secondaryContainer">
                                <Link to="/" className="logo" onClick={this.menuReset}></Link>
                                <ul className="commonList">
                                    {routes.map(route => (
                                        <NavItem key={route.path} {...route} menuReset={this.menuReset} />
                                    ))}
                                </ul>
                            </div>
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
                {this.props.logged &&
                <div className="userInfo">
                    <p>{this.props.userName}</p>
                    <button onClick={this.props.logOut}>Выйти</button>
                </div>}
            </AppHeader>
        );
    }
}

const mapStateToProps = state => ({
    logged: state.LogInReducer.accessToken,
    userName: state.LogInReducer.user.username,
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut()),
    /////
    // addNewProductOperation: product => dispatch(addNewProductOperation(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
