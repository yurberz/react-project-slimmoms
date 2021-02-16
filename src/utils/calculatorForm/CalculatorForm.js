// сделать валидацию вносимых значений

import React, { Component } from "react";
import {
  TitleForm,
  LabelCalc,
  InputCalc,
  WrapCalc,
  LabelRadio,
  InputRadio,
  WrapInput,
  InnerDiv,
} from "./calculatorFormStyle";

const blType = {
  TYPE1: 1,
  TYPE2: 2,
  TYPE3: 3,
  TYPE4: 4,
};
const initialState = {
  height: "",
  age: "",
  currentWeight: "",
  goalWeight: "",
  bloodType: null,
};

class CalculatorForm extends Component {
  state = { ...initialState };

  onInputChng = (e) => {
    const { name, value } = e.target;
    if (Number.isNaN(Number(value))) {
      console.log("AHTUNG AHTUNG!!!!");
      return;
    } else {
      this.setState({ [name]: value });
    }
  };

  onRadioCheck = (e) => {
    const { name, value } = e.target;
    this.setState({ bloodType: Number(value) });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  render() {
    const { height, age, currentWeight, goalWeight, bloodType } = this.state;
    return (
      <WrapCalc>
        <TitleForm>Узнай свою суточную норму калорий</TitleForm>
        <form onSubmit={this.onSubmitForm}>
          <InnerDiv>
            <WrapInput>
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
            </WrapInput>
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
                  value={currentWeight}
                  name="currentWeight"
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
                  value={goalWeight}
                  name="goalWeight"
                  onChange={this.onInputChng}
                />
              </LabelCalc>
            </WrapInput>
            <LabelCalc as="p">Группа крови *</LabelCalc>
            <div role="group">
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
            </div>
          </InnerDiv>
          <button type="submit">Похудеть</button>
        </form>
      </WrapCalc>
    );
  }
}

export default CalculatorForm;
