import React, { Component } from "react";
import { connect } from "react-redux";
import getReccomendation from "../redux/operations/calcOperation";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import CalculatorPageDecoration from "../components/decoration/CalculatorPageDecoration";
import Recommend from "../utils/recommendation/Recommend";

class CalculatorPage extends Component {
  render() {
    return (
      <>
        <CalculatorPageDecoration />
        <CalculatorForm
          getReccomendation={getReccomendation}
          id={this.props.id}
          title={"Узнай свою суточную норму калорий"}
        />
        <Recommend />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.LogInReducer.user.id,
  };
};

export default connect(mapStateToProps)(CalculatorPage);
