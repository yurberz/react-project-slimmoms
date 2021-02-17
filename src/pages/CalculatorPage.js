import React, { Component } from "react";
import { connect } from "react-redux";
import getReccomendation from "../redux/operations/calcOperation";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import Recommend from "../utils/recommendation/Recommend";

class CalculatorPage extends Component {
  render() {
    return (
      <>
        <CalculatorForm
          getReccomendation={getReccomendation}
          // id={this.props.id}
        />
        <Recommend />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.RegisterReducer.id,
  };
};

export default connect(mapStateToProps)(CalculatorPage);
