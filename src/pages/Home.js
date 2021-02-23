import React, { Component } from "react";
import { connect } from "react-redux";
import HomePageDecoration from "../components/decoration/HomePageDecoration";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import getReccomendation from "../redux/operations/calcOperation";
import styled from "styled-components";
import Modal from "../components/modal/Modal";
import DailyCalorieIntake from "../components/dailyCalorieInTake/DailyCalorieInTake";
import { toggleModal } from "../redux/actions/calcAction";

const Div = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding-left: 87px;
    padding-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 auto;
    padding-left: 115px;
  }
`;

class Home extends Component {
  render() {
    return (
      <>
        {this.props.modal && (
          <Modal>
            <DailyCalorieIntake
              notAllowed={this.props.notAllowed}
              dailyRate={this.props.dailyRate}
              hndlBtnNext={this.props.toggleModal}
            />
          </Modal>
        )}
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
    notAllowed: state.calculator.notAllowed,
    dailyRate: state.calculator.dailyRate,
  };
};
const mapDispatchToProps = {
  toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
