import React, { Component } from "react";
import { connect } from "react-redux";
import getReccomendation from "../redux/operations/calcOperation";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import RightSideBar from "../utils/rightSideBar/rightSideBar";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1000;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    #fff,
    #fff calc(50% + 105px),
    #f0f1f3 calc(50% + 105px),
    #f0f1f3
  );
`;

const Div = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-left: 115px;
  padding-right: 115px;
`;

class CalculatorPage extends Component {
  render() {
    return (
      <>
        <Background />
        <Div>
          <CalculatorForm
            getReccomendation={getReccomendation}
            // id={this.props.id}
          />

          <RightSideBar />
        </Div>
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
