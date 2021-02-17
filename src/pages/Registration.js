import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { required, email, length, format } from "redux-form-validators";
import Inputt from "../components/form/Input";

const ContainerForm = styled.div`
  max-width: 439px;
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
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  margin-bottom: 60px;
`;
const Input = styled.input`
  border-bottom: 1px solid #e0e0e0;
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 15px;
  width: 239px;
  font-family: Verdana;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  outline: none;
  background-color: white;
  &:focus {
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #9b9faa;
  }
  &:invalid {
    border-bottom: 2px solid red;
  }
`;
const Button = styled.button`
  width: 176px;
  height: 44px;
  background: #ffffff;
  border: 2px solid #fc842d;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: Verdana;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #fc842d;
  margin: 60px 0 0 0;
  outline: none;
  &:hover {
    background: #fc842d;
    color: white;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
`;

class Registration extends Component {
  state = {
    email: "",
    password: "",
    username: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://slimmom-backend.goit.global/auth/register", {
        ...this.state,
      })
      .then((response) => console.log(response));
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ContainerForm>
        <HeadingH1>РЕГИСТРАЦИЯ</HeadingH1>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            placeholder="Имя *"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
            validate={length({ min: 2 })}
          />
          <Input
            type="email"
            placeholder="Электронная почта *"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />
          <Input
            type="password"
            placeholder="Пароль *"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
          />
          <Inputt
            text={""}
            placeholder={"fuckkkkgit"}
            name={"password"}
            onChange={this.onChange}
            value={this.state.password}
          />
          <ContainerButton>
            <Button>Вход</Button>
            <Button type="submit">Регистрация</Button>
          </ContainerButton>
        </form>
      </ContainerForm>
    );
  }
}

export default Registration;
