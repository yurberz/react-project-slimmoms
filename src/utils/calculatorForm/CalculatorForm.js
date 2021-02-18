import React, { Component } from "react";
import Modal from "../../components/modal/Modal";
import { connect } from "react-redux";
// import Inputt from "../../components/form/Input";
import getReccomendation from "../../redux/operations/calcOperation";
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
  showModal: false,
};

class CalculatorForm extends Component {
  state = { ...initialState };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

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
        <TitleForm>{this.props.title}</TitleForm>
        <form onSubmit={this.onSubmitForm}>
          <InnerDiv>
            {renderInputForm.map((item) => (
              <WrapInput key={item.name}>
                <LabelCalc>
                  {item.title}
                  <InputCalc
                    // placeholder={item.title}
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
                <LabelRadio key={item.value}>
                  <InputRadio
                    type="radio"
                    value={item.value}
                    checked={item.value === this.state.bloodType}
                    onChange={this.onRadioCheck}
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
                      </Svg>
                      <Span>{item.value}</Span>{" "}
                    </>
                  )}{" "}
                </LabelRadio>
              ))}
            </WrapRadio>
          </InnerDiv>
          <FormButton type="submit">Похудеть</FormButton>
        </form>
        {/* onClick={this.toggleModal} */}
        {/* {this.state.showModal && (
          <Modal
            toggleModal={this.toggleModal}
            showModal={this.state.showModal}
          ></Modal>
        )} */}
      </WrapCalc>
    );
  }
}

const mapDispatchToProps = {
  getReccomendation,
};

export default connect(null, mapDispatchToProps)(CalculatorForm);
