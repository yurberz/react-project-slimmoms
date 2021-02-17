import React, { Component } from "react";
import { connect } from "react-redux";
import getReccomendation from "../redux/operations/calcOperation";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import RightSideBar from "../utils/rightSideBar/rightSideBar";
import CalculatorPageDecoration from "../components/decoration/CalculatorPageDecoration";

class CalculatorPage extends Component {
  render() {
    return (
      <>
        <CalculatorPageDecoration />
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
