import React, { Component } from "react";
import { connect } from "react-redux";
import getReccomendation from "../redux/operations/calcOperation";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import Recommend from "../utils/recommendation/Recommend";

// const CalculatorPage = (id) => {
//   console.log("id", id);
//   return (
//     <>
//       <CalculatorForm loggedUserRecomends={getReccomendation} />
//       <Recommend />
//     </>
//   );
// };

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
    id: state.LogInReducer.sid,
  };
};

export default connect(mapStateToProps)(CalculatorPage);
