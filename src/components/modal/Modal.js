import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/calcAction";

// import PropTypes from "prop-types";

import Button from "./button/Button";

import s from "./Modal.module.css";
import DailyCalorieIntake from "../dailyCalorieInTake/DailyCalorieInTake";

class Modal extends Component {
  //   static propTypes = {
  //      modal: this.PropTypes.func,
  //   };
  modal = (e) => {
    if (e.code === "Escape" || e.target.id === "overlay") {
      this.props.toggleModal();
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.modal);
    window.addEventListener("click", this.modal);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.modal);
    window.removeEventListener("click", this.modal);
  };

  render() {
    return (
      <>
        <div
          className={s.modalWrapper}
          ref={this.backdrop}
          onClick={this.props.toggleModal}
          role="presentation"
        >
          <div className={s.modalBody}>
            <button
              type="button"
              className={s.modalBtn}
              onClick={this.modal}
            ></button>
            <DailyCalorieIntake />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.calculator.modal,
  };
};
const mapDispatchToProps = {
  toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
