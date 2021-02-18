import React, { Component } from "react";
import { connect } from "react-redux";
import getReccomendation from "../redux/operations/calcOperation";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import RightSideBar from "../utils/rightSideBar/rightSideBar";
import styled from "styled-components";
import bgLayers from "../img/layersBg.png";
import bgTablet from "../img/rightSideBarBottom@1x.png";

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -100;
  width: 100vw;
  min-height: 1024px;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #fff, #fff 664px, #f0f1f3 0, #f0f1f3);

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -100;
    width: 100vw;
    min-height: 1024px;
    height: 100%;
    overflow: hidden;
    background: url(${bgTablet}),
      linear-gradient(180deg, #fff, #fff 674px, #f0f1f3 0, #f0f1f3);
    background-repeat: no-repeat;
    background-position: bottom;
    background-position-x: right;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -100;
    width: 100vw;
    min-height: 850px;
    height: 100%;
    background: url(${bgLayers}),
      linear-gradient(
        90deg,
        #fff,
        #fff calc(50% + 105px),
        #f0f1f3 calc(50% + 105px),
        #f0f1f3
      );
    background-repeat: no-repeat;
    background-position: right;
  }
`;

const Div = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    padding-left: 87px;
    padding-right: 87px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-left: 115px;
    padding-right: 115px;
  }
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
