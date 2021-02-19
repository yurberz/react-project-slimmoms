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
// import { getCurentDayInfoOperation } from "../../redux/operations/diaryOperations";
// import { deleteProductOperation } from "../../redux/operations/diaryOperations";

class Header extends Component {
    state = {
        showMenu: false,
    };

    menuToggler = () => {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu,
        }));

        // this.props.getCurentDayInfoOperation({date: "2020-12-31"});

        // this.props.deleteProductOperation({
        //     dayId: "602e7d88b358b53ec8eb29b7",
        //     eatenProductId: "b69e0c05-5bd8-4f2d-9815-5a12a8a2360d",
        // });
    };

    // eatenProductId: "",
            // eatenProductId: "",
            // eatenProductId: "",
            // eatenProductId: "",
            // eatenProductId: "",
            // eatenProductId: "3a173d89-2b98-4a7d-9aba-75107cec5dc4",

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
    // getCurentDayInfoOperation: date => dispatch(getCurentDayInfoOperation(date)),
    // deleteProductOperation: prodOfDay => dispatch(deleteProductOperation(prodOfDay)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
