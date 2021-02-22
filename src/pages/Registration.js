import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Inputt from "../components/form/Input";
import Buttonn from "../components/form/Button";
import { signUpOperation } from "../redux/operations/registerOperation";
import LoginPageDecoration from "../components/decoration/LoginPageDecoration";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../components/form/register.css";

const ContainerForm = styled.div`
  max-width: 439px;
  padding: 15px;
  @media screen and (max-width: 1279px) {
    margin: 82px auto;
  }
  @media screen and (max-width: 768px) {
    margin: 82px auto 82px auto;
  }
`;
const ContainerButton = styled.div`
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  margin-top: 82px;
`;

const HeadingH1 = styled.h1`
  color: #fc842d;
  font-family: "GothamPro";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  margin-bottom: 60px;
  @media screen and (min-width: 1300px) {
    padding-top: 0;
    margin-top: 0;
  }
`;

class Registration extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    error: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const history = this.props.history;

    if (this.state.username.length < 3 || this.state.username.length > 12) {
      this.setState({
        error: "Имя должно содержать не меньше 3 символов и не больше 12 ",
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
    } else if (!this.state.email.includes("@")) {
      this.setState({
        error: "Адрес почты введен неверно",
      });
      return;
    } else {
      this.props.signUpOperation(
        {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username,
        },
        history
      );
      this.setState({ email: "", password: "", username: "", error: "" });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const error = this.props.error;
    return (
      <ContainerForm>
        <LoginPageDecoration />

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
            <p>Профиль уже зарегестрирован</p>
          </div>
        </CSSTransition>
        <HeadingH1>РЕГИСТРАЦИЯ</HeadingH1>
        <form onSubmit={this.onSubmit}>
          <Inputt
            text={"text"}
            placeholder={"Имя *"}
            name={"username"}
            onChange={this.onChange}
            value={this.state.username}
          />
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
            <Link to={{ pathname: "/login" }} className="linkTablet">
              <Buttonn type={""} text={"Вход"} />
            </Link>
            <Buttonn type={"submit"} text={"Регистрация"} />
          </ContainerButton>
        </form>
      </ContainerForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.RegisterReducer.error,
  };
};

export default connect(mapStateToProps, { signUpOperation })(Registration);
