import React, { Fragment, Component } from "react";
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
  outline: 1px solid teal;
`;

class Home extends Component {
  openModal = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <Fragment>
        <HomePageDecoration />
        <Div>
          <CalculatorForm
            title={"Просчитай свою суточную норму калорий прямо сейчас"}
            getReccomendation={getReccomendation}
            openModal={this.openModal}
          />
        </Div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  toggleModal,
};
export default connect(null, mapDispatchToProps)(Home);
