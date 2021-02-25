import React, { Component } from "react";
import styled from "styled-components";
import Inputt from "../components/form/Input";
import Buttonn from "../components/form/Button";
import { connect } from "react-redux";
import { logInOperation } from "../redux/operations/logInOperation";
import LoginPageDecoration from "../components/decoration/LoginPageDecoration";
import { logOut } from "../redux/actions/logOutAction";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../components/form/register.css";
import { getLoading } from "../redux/selectors/spinSelector";

const ContainerForm = styled.div`
  max-width: 439px;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    margin-top: 160px;
    max-width: 639px;
    padding-left: 87px;
    padding-right: 87px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 148px;
    max-width: 639px;
    padding-left: 115px;
    padding-right: 115px;
  }
  @media screen and (max-width: 768px) {
    /* max-width: 439px; */
    /* margin: 0 auto; */
  }
  @media screen and (max-width: 369px) {
    max-width: 439px;
    margin: 0 auto;
  }
`;
const ContainerButton = styled.div`
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0px;
  margin-top: 90px;

  @media screen and (min-width: 768px) {
    margin-top: 82px;
  }
`;

const HeadingH1 = styled.h1`
  color: #fc842d;
  font-family: GothamPro-Bold;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  margin-top: 100px;
  margin-bottom: 60px;
  @media screen and (min-width: 1300px) {
    margin-top: 100px;
    padding-top: 0;
  }
  @media screen and (max-width: 1279px) {
    padding-top: 0;
  }
  @media screen and (max-width: 766px) {
    padding-top: 0;
    margin-top: 42px;
    text-align: center;
  }
  @media screen and (max-width: 390px) {
    margin-top: 42px;
  }
`;

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.email.includes("@")) {
      this.setState({
        error: "Адрес почты введен неверно",
      });
      return;
    } else if (
      this.state.password.length < 3 ||
      this.state.password.length > 12
    ) {
      this.setState({
        error: "Пароль должно содержать не меньше 3 символов и не больше 12",
      });
      return;
    } else {
      this.props.logInOperation({
        email: this.state.email,
        password: this.state.password,
      });
      this.setState({ email: "", password: "", error: "" });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const error = this.props.error;
    return (
      <>
        <LoginPageDecoration />
        <ContainerForm>
          {/* <LoginPageDecoration /> */}
          <CSSTransition
            in={this.state.error.length >= 1}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="warning">
              <p>{this.state.error}</p>
            </div>
          </CSSTransition>
          <CSSTransition
            in={error.length >= 1}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="warning">
              <p>Профиль не зарегестрирован</p>
            </div>
          </CSSTransition>
          <HeadingH1>ВХОД</HeadingH1>
          <form onSubmit={this.onSubmit}>
            <Inputt
              text={"email"}
              placeholder={"Электронная почта *"}
              name={"email"}
              onChange={this.onChange}
              value={this.state.email}
            />

            <Inputt
              text={"password"}
              placeholder={"Пароль *"}
              name={"password"}
              onChange={this.onChange}
              value={this.state.password}
            />
            <ContainerButton>
              <Buttonn type={"submit"} text={"Вход"} />
              <Link to={{ pathname: "/registration" }} className="linkTablet">
                <Buttonn type={""} text={"Регистрация"} />
              </Link>
            </ContainerButton>
          </form>
        </ContainerForm>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.LogInReducer.error,
    spin: getLoading(state),
    isLoading: state.loading,
  };
};

export default connect(mapStateToProps, { logInOperation, logOut })(Login);
