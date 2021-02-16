import React, { Component } from "react";
import { connect } from "react-redux";
import getReccomendation from "../../redux/operations/calcOperation";
import CalculatorForm from "../../utils/calculatorForm/CalculatorForm";
import Recommend from "../../utils/recommendation/Recommend";

class CalculatorInfo extends Component {
  render() {
    return (
      <>
        <CalculatorForm loggedUserRecomends={getReccomendation} />
        <Recommend />
      </>
    );
  }
}

export default CalculatorInfo;
