import React, { Component } from "react";
import { connect } from "react-redux";
import HomePageDecoration from "../components/decoration/HomePageDecoration";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import getReccomendation from "../redux/operations/calcOperation";
import { toggleModal } from "../redux/actions/calcAction";
import styled from "styled-components";
import Modal from "../components/modal/Modal";

const Div = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  padding-left: 115px;
  @media screen and(min-width: 768px) {
    margin: 0 auto;
  }
`;

class Home extends Component {
  render() {
    return (
      <>
        {this.props.modal && <Modal />}
        <HomePageDecoration />
        <Div>
          <CalculatorForm
            title={"Просчитай свою суточную норму калорий прямо сейчас"}
            getReccomendation={getReccomendation}
          />
        </Div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    modal: state.calculator.modal,
  };
};

export default connect(mapStateToProps)(Home);
