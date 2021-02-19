import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleModal, clearState } from "../../redux/actions/calcAction";

// import PropTypes from "prop-types";

import Button from "./button/Button";

import s from "./Modal.module.css";
import DailyCalorieIntake from "../dailyCalorieInTake/DailyCalorieInTake";

class Modal extends Component {
  //   static propTypes = {
  //      modal: this.PropTypes.func,
  //   };

  componentDidMount = () => {
    window.addEventListener("keydown", this.modal);
    window.addEventListener("click", this.modal);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.modal);
    window.removeEventListener("click", this.modal);
  };
  modal = (e) => {
    if (e.code === "Escape" || e.target.id === "overlay") {
      // this.props.toggleModal();
      // this.props.clearState();gi
      this.hndlBtnNext();
    }
  };
  hndlBtnNext = () => {
    this.props.toggleModal();
    this.props.clearState();
  };

  render() {
    return (
      <>
        <div
          className={s.modalWrapper}
          ref={this.backdrop}
          onClick={this.modal}
          role="presentation"
        >
          <div className={s.modalBody}>
            <button
              type="button"
              // name="zakrosya"
              className={s.modalBtn}
              onClick={this.hndlBtnNext}
            ></button>
            <DailyCalorieIntake
              dailyRate={this.props.dailyRate}
              notAllowed={this.props.notAllowed}
              hndlBtnNext={this.hndlBtnNext}
            />
          </div>
        </div>
      </>
    );
  }
}

//notAllowed - огромній массив завтра уточним как вібирать

const mapStateToProps = (state) => {
  return {
    modal: state.calculator.modal,
    notAllowed: state.calculator.notAllowed,
    dailyRate: state.calculator.dailyRate,
  };
};
const mapDispatchToProps = {
  toggleModal,
  clearState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
