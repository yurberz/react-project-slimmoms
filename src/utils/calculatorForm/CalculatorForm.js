import React, { Component } from "react";
import { connect } from "react-redux";
import Buttonn from "../../components/form/Button";
// import Inputt from "../../components/form/Input";
import getReccomendation from "../../redux/operations/calcOperation";
import sprite from "../../svg/radio-btn.svg";

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
} from "./calculatorFormStyle";

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
    title: "Возраст *",
    name: "age",
  },
  {
    title: "Вес *",
    name: "weight",
  },
  {
    title: "Рост *",
    name: "height",
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
    if (Number.isNaN(Number(value))) {
      return;
    } else {
      this.setState({ [name]: Number(value) });
    }
  };

  onRadioCheck = (e) => {
    this.setState({ bloodType: Number(e.target.value) });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.getReccomendation({ ...this.state }, this.props.id);
    this.setState({ ...initialState });
  };

  render() {
    const { bloodType } = this.state;
    return (
      <WrapCalc>
        <TitleForm>Узнай свою суточную норму калорий</TitleForm>
        <form onSubmit={this.onSubmitForm}>
          <InnerDiv>
            {renderInputForm.map((item) => (
              <WrapInput>
                <LabelCalc>
                  {item.title}
                  <InputCalc
                    type="text"
                    value={this.state[item.name]}
                    name={item.name}
                    onChange={this.onInputChng}
                  />
                </LabelCalc>
              </WrapInput>
            ))}

            <Text>Группа крови *</Text>
            <WrapRadio role="group">
              {renderProps.map((item) => (
                <LabelRadio>
                  <InputRadio
                    type="radio"
                    value={item.value}
                    checked={item.value === bloodType}
                    onChange={this.onRadioCheck}
                  />
                  {item.value === bloodType ? (
                    <>
                      <Svg checked>
                        <use href={sprite + "#icon-radio_button_on"} />
                      </Svg>
                      <Span checked>{item.value}</Span>
                    </>
                  ) : (
                    <>
                      <Svg>
                        <use href={sprite + "#icon-panorama_fisheye"} />
                      </Svg>
                      <Span>{item.value}</Span>{" "}
                    </>
                  )}{" "}
                </LabelRadio>
              ))}
            </WrapRadio>
          </InnerDiv>
          <Buttonn type={"submit"} text={"Похудеть"} />
        </form>
      </WrapCalc>
    );
  }
}

const mapDispatchToProps = {
  getReccomendation,
};

export default connect(null, mapDispatchToProps)(CalculatorForm);
