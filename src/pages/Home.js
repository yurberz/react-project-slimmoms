import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import HomePageDecoration from "../components/decoration/HomePageDecoration";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import getReccomendation from "../redux/operations/calcOperation";
import { toggleModal } from "../redux/actions/calcAction";

class Home extends Component {
  openModal = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <Fragment>
        <HomePageDecoration />
        <CalculatorForm
          title={"Просчитай свою суточную норму калорий прямо сейчас"}
          getReccomendation={getReccomendation}
          openModal={this.openModal}
        />
      </Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     modal: state.calculator.modal,
//   };
// };

const mapDispatchToProps = {
  toggleModal,
};
export default connect(null, mapDispatchToProps)(Home);
