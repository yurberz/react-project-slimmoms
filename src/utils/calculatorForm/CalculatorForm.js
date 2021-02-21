import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import getReccomendation from "../../redux/operations/calcOperation";
import { chngUserParam } from "../../redux/operations/logInOperation";
import sprite from "../../svg/elipscomb.svg";

import {
  TitleForm,
  LabelCalc,
  InputCalc,
  WrapCalc,
  LabelRadio,
  InputRadio,
  WrapInput,
  InnerDiv,
  WrapRadio,
  Svg,
  Text,
  Span,
  FormButton,
  Error,
} from "./calculatorFormStyle";
import { getLoading } from "../../redux/selectors/spinSelector";
import Spin from "../../components/loader/Spin";

const blType = {
  TYPE1: 1,
  TYPE2: 2,
  TYPE3: 3,
  TYPE4: 4,
};

const renderProps = Object.keys(blType).map((item) => ({
  value: blType[item],
}));

const renderInputForm = [
  {
    title: "Рост *",
    name: "height",
  },
  {
    title: "Возраст *",
    name: "age",
  },
  {
    title: "Текущий вес *",
    name: "weight",
  },
  {
    title: "Желаемый вес *",
    name: "desiredWeight",
  },
];

const initialState = {
  weight: "",
  height: "",
  age: "",
  desiredWeight: "",
  bloodType: null,
};

class CalculatorForm extends Component {
  state = { ...initialState };

  onInputChng = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onRadioCheck = (e) => {
    this.setState({ bloodType: Number(e.target.value) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.id) {
      this.props.getReccomendation({ ...this.state });
    } else {
      console.log(this.props.id);
      this.props.chngUserParam({ ...this.state }, this.props.id);
    }
  };

  render() {
    return (
      <>
        <WrapCalc>
          {this.props.spin && <Spin />}
          <TitleForm>{this.props.title}</TitleForm>

          <Formik
            initialValues={{ ...initialState }}
            validate={(values) => {
              const errors = {};
              if (!values.weight) {
                errors.weight = "Все поля должны быть заполнены";
              } else if (!parseInt(values.weight)) {
                errors.weight = "Укажите вес от 20 до 500кг";
              } else if (
                parseInt(values.weight) < 20 ||
                parseInt(values.weight) > 500
              ) {
                errors.weight = "Укажите вес от 20 до 500кг";
              }
              if (!values.height) {
                errors.height = "Все поля должны быть заполнены";
              } else if (!parseInt(values.height)) {
                errors.height = "Укажите рост от 100 до 250см";
              } else if (
                parseInt(values.height) < 100 ||
                parseInt(values.height) > 250
              ) {
                errors.height = "Укажите рост от 100 до 250см";
              }
              if (!values.desiredWeight) {
                errors.desiredWeight = "Все поля должны быть заполнены";
              } else if (!parseInt(values.desiredWeight)) {
                errors.desiredWeight = "Укажите вес от 20 до 500кг";
              } else if (
                parseInt(values.desiredWeight) < 20 ||
                parseInt(values.desiredWeight) > 500
              ) {
                errors.desiredWeight = "Укажите вес от 20 до 500кг";
              }
              if (!values.age) {
                errors.age = "Все поля должны быть заполнены";
              } else if (!parseInt(values.age)) {
                errors.age = "Укажите возраст от 18 до 100лет";
              } else if (
                parseInt(values.age) < 18 ||
                parseInt(values.age) > 100
              ) {
                errors.age = "Укажите возраст от 18 до 100лет";
              }
              if (!values.bloodType) {
                errors.bloodType = "Все поля должны быть заполнены";
              }
              return errors;
            }}
            onSubmit={(values) => {
              this.setState({
                weight: parseInt(values.weight),
                height: parseInt(values.height),
                age: parseInt(values.age),
                desiredWeight: parseInt(values.desiredWeight),
                bloodType: Number(values.bloodType),
              });
              console.log("state", this.state);
              // this.onSubmitForm(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={this.handleSubmit}>
                <InnerDiv>
                  {renderInputForm.map((item) => (
                    <WrapInput key={item.name}>
                      <LabelCalc>{item.title}</LabelCalc>
                      <InputCalc
                        type="text"
                        value={values[item.name]}
                        name={item.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {/* </LabelCalc> */}
                      {errors[item.name] && touched[item.name] && (
                        <Error>{errors[item.name]}</Error>
                      )}
                    </WrapInput>
                  ))}

                  <Text>Группа крови *</Text>
                  <WrapRadio role="group">
                    {renderProps.map((item) => (
                      <LabelRadio key={item.value}>
                        <InputRadio
                          type="radio"
                          value={item.value}
                          checked={item.value === values.bloodType}
                          onChange={handleChange}
                          name={item.value}
                        />
                        {item.value === this.state.bloodType ? (
                          <>
                            <Svg checked>
                              <use href={sprite + "#icon-elips-combine"} />
                            </Svg>
                            <Span checked>{item.value}</Span>
                          </>
                        ) : (
                          <>
                            <Svg>
                              <use href={sprite + "#icon-elips-gray"} />
                              {/* <use href={sprite + "#icon-elips-orange"} /> */}
                            </Svg>
                            <Span>{item.value}</Span>{" "}
                          </>
                        )}{" "}
                      </LabelRadio>
                    ))}
                  </WrapRadio>
                  {/* {errors.bloodType && touched.bloodType && (
                    <Error>{errors.bloodType}</Error>
                  )} */}
                </InnerDiv>
                <FormButton type="submit">Похудеть</FormButton>
              </form>
            )}
          </Formik>
        </WrapCalc>
      </>
    );
  }
}

const mapDispatchToProps = {
  getReccomendation,
  // clearState,
  // toggleModal,
  chngUserParam,
};

const mapStateToProps = (state) => {
  return {
    accessToken: state.LogInReducer.accessToken,
    id: state.LogInReducer.user.id,
    spin: getLoading(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorForm);
