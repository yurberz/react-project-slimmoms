import React, { Component } from "react";
import { connect } from "react-redux";
import getReccomendation from "../redux/operations/calcOperation";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import RightSideBar from "../utils/rightSideBar/rightSideBar";

class CalculatorPage extends Component {
  render() {
    return (
      <>
        <CalculatorForm
          getReccomendation={getReccomendation}
          // id={this.props.id}
        />

        <RightSideBar />
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
