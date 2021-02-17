import React, { Component } from "react";
import { connect } from "react-redux";
import Buttonn from "../../components/form/Button";
import Inputt from "../../components/form/Input";
import getReccomendation from "../../redux/operations/calcOperation";

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
} from "./calculatorFormStyle";

const blType = {
  TYPE1: 1,
  TYPE2: 2,
  TYPE3: 3,
  TYPE4: 4,
};
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
    const { height, age, weight, desiredWeight, bloodType } = this.state;
    return (
      <WrapCalc>
        <TitleForm>Узнай свою суточную норму калорий</TitleForm>
        <form onSubmit={this.onSubmitForm}>
          <InnerDiv>
            <Inputt
              type={"text"}
              placeholder={"Рост * "}
              name={"height"}
              onChange={this.onInputChng}
              value={height}
            />
            {/* <WrapInput>
              <LabelCalc>
                Рост *
                <InputCalc
                  // placeholder="Рост * "
                  type="text"
                  value={height}
                  name="height"
                  onChange={this.onInputChng}
                />
              </LabelCalc>
            </WrapInput> */}
            <WrapInput>
              <LabelCalc>
                Возраст *
                <InputCalc
                  // placeholder="Возраст *"
                  type="text"
                  value={age}
                  name="age"
                  onChange={this.onInputChng}
                />
              </LabelCalc>
            </WrapInput>
            <WrapInput>
              <LabelCalc>
                Текущий вес *
                <InputCalc
                  // placeholder="Текущий вес *"
                  type="text"
                  value={weight}
                  name="weight"
                  onChange={this.onInputChng}
                />
              </LabelCalc>
            </WrapInput>
            <WrapInput>
              <LabelCalc>
                Желаемый вес *
                <InputCalc
                  // placeholder="Желаемый вес *"
                  type="text"
                  value={desiredWeight}
                  name="desiredWeight"
                  onChange={this.onInputChng}
                />
              </LabelCalc>
            </WrapInput>
            <WrapRadio role="group">
              <LabelCalc as="p">Группа крови *</LabelCalc>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  value={blType.TYPE1}
                  checked={blType.TYPE1 === bloodType}
                  onChange={this.onRadioCheck}
                />{" "}
                1
              </LabelRadio>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  value={blType.TYPE2}
                  checked={blType.TYPE2 === bloodType}
                  onChange={this.onRadioCheck}
                />{" "}
                2
              </LabelRadio>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  value={blType.TYPE3}
                  checked={blType.TYPE3 === bloodType}
                  onChange={this.onRadioCheck}
                />{" "}
                3
              </LabelRadio>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  value={blType.TYPE4}
                  checked={blType.TYPE4 === bloodType}
                  onChange={this.onRadioCheck}
                />{" "}
                4
              </LabelRadio>
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
