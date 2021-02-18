import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Inputt from "../components/form/Input";
import Buttonn from "../components/form/Button";
import { signUpOperation } from "../redux/operations/registerOperation";
import LoginPageDecoration from '../components/decoration/LoginPageDecoration';
import { Link } from "react-router-dom";

const ContainerForm = styled.div`
  max-width: 439px;
  padding: 15px;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
const ContainerButton = styled.div`
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
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
  padding-top: 95px;
`;

class Registration extends Component {
  state = {
    email: "",
    password: "",
    username: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUpOperation(this.state);
    this.setState({ email: "", password: "", username: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ContainerForm>
        <LoginPageDecoration />
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
            text={""}
            placeholder={"Пароль *"}
            name={"password"}
            onChange={this.onChange}
            value={this.state.password}
          />
          <ContainerButton>
            <Link to={{ pathname: "/login" }}>
              <Buttonn type={""} text={"Вход"} />
            </Link>
            <Buttonn type={"submit"} text={"Регистрация"} />
          </ContainerButton>
        </form>
      </ContainerForm>
    );
  }
}

export default connect(null, { signUpOperation })(Registration);
