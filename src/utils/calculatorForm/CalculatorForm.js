import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import getReccomendation from "../../redux/operations/calcOperation";
import { clearState, toggleModal } from "../../redux/actions/calcAction";
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

  // componentDidUpdate = () => {
  //   if (this.props.accessToken) {
  //     this.props.clearState();
  //   }
  // };
  // componentDidUpdate = () => {
  //   if (this.props.accessToken) {
  //     this.props.clearState();
  //   }
  // };

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
    if (!this.props.accessToken) {
      this.props.toggleModal();
      this.props.getReccomendation({ ...this.state });
    } else {
      console.log(this.props.id);
      this.props.chngUserParam({ ...this.state }, this.props.id);
    }
    this.setState({ ...initialState });
  };

  render() {
    return (
      <>
        <WrapCalc>
          <TitleForm>{this.props.title}</TitleForm>
          <form onSubmit={this.onSubmitForm}>
            <InnerDiv>
              {renderInputForm.map((item) => (
                <WrapInput key={item.name}>
                  <LabelCalc>
                    {item.title}
                    <InputCalc
                      autoFocus
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
                {renderProps.map((item, idx) => (
                  <LabelRadio key={item.value}>
                    <InputRadio
                      type="radio"
                      value={item.value}
                      checked={item.value === this.state.bloodType}
                      onChange={this.onRadioCheck}
                      tabIndex={idx}
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
        </WrapCalc>
      </>
    );
  }
}

const mapDispatchToProps = {
  getReccomendation,
  clearState,
  toggleModal,
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
