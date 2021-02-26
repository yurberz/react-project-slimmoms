import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { logInOperation } from "../redux/operations/logInOperation";
import LoginPageDecoration from "../components/decoration/LoginPageDecoration";
import { logOut } from "../redux/actions/logOutAction";
import { Link } from "react-router-dom";
import "../components/form/register.css";
import { getLoading } from "../redux/selectors/spinSelector";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setError } from "../redux/actions/registerAction";

const ContainerForm = styled.div`
  max-width: 439px;
  padding-left: 15px;
  padding-right: 15px;
  color: red;

  input {
    border-bottom: 1px solid #e0e0e0;
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 15px 15px 15px 0;
    width: 289px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    outline: none;
    background-color: white;
  }

  button {
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
    outline: none;
    margin: 0px;
  }
  button:hover {
    background: #fc842d;
    color: white;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
  div {
    font-family: Verdana;
  }
  @media screen and (min-width: 768px) {
    max-width: 639px;
    padding-left: 87px;
    padding-right: 87px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 639px;
    padding-left: 115px;
  }
  @media screen and (max-width: 767px) {
    max-width: 439px;
    margin: 0 auto;
    button {
      margin: 15px auto;
    }
  }
  @media screen and (max-width: 388px) {
    max-width: 439px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 0px;

    button {
      margin: 15px auto;
    }
  }
`;
const ContainerButton = styled.div`
  max-width: 382px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
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
  margin-bottom: 60px;

  @media screen and (min-width: 1300px) {
    margin-top: 90px;
    padding-top: 0;
  }
  @media screen and (max-width: 1279px) {
    margin-top: 157px;
    padding-top: 0;
  }
  @media screen and (max-width: 766px) {
    margin-top: 157px;
    padding-top: 0;
  }
  @media screen and (max-width: 390px) {
    margin-top: 40px;
    text-align: center;
  }
`;

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: false,
  };

  componentDidMount() {
    this.props.setError("");
  }

  render() {
    const error = this.props.error;

    return (
      <>
        {error.length > 0 ? (
          <div className="ctrl ">
            <span className="nortification animateOpen warning">
              Профиль не зарегистрирован.
            </span>
          </div>
        ) : null}
        <LoginPageDecoration />

        <ContainerForm>
          <HeadingH1>ВХОД</HeadingH1>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Обязательное поле для ввода!";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Невалидный адрес почты.";
              }
              if (!values.password) {
                errors.password = "Обязательное поле для ввода!";
              } else if (values.password.length <= 3) {
                errors.password = "Пароль должен быть больше 3 символов";
              } else if (values.password.length >= 12) {
                errors.password = "Пароль должен быть меньше 12 символов";
              }
              return errors;
            }}
            onSubmit={(values) => {
              this.props.logInOperation(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="email"
                  name="email"
                  placeholder="Электронная почта *"
                />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" placeholder="Пароль *" />
                <ErrorMessage name="password" component="div" />

                <ContainerButton>
                  <button type="submit">Вход</button>
                  <Link
                    to={{ pathname: "/registration" }}
                    className="linkTablet"
                  >
                    <button>Регистрация</button>
                  </Link>
                </ContainerButton>
              </Form>
            )}
          </Formik>
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

export default connect(mapStateToProps, { logInOperation, logOut, setError })(
  Login
);
