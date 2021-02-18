import React, { Component } from "react";
import { connect } from "react-redux";
import HomePageDecoration from "../components/decoration/HomePageDecoration";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import getReccomendation from "../redux/operations/calcOperation";
import { toggleModal } from "../redux/actions/calcAction";
import styled from "styled-components";

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
  openModal = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <>
        <HomePageDecoration />
        <Div>
          <CalculatorForm
            title={"Просчитай свою суточную норму калорий прямо сейчас"}
            getReccomendation={getReccomendation}
            openModal={this.openModal}
          />
        </Div>
      </>
    );
  }
}

const mapDispatchToProps = {
  toggleModal,
};
export default connect(null, mapDispatchToProps)(Home);
