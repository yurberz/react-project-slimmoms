import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/calcAction";
// import PropTypes from "prop-types";
import Button from "./button/Button";
import s from "./Modal.module.css";
import DailyCalorieIntake from "../dailyCalorieInTake/DailyCalorieInTake";
import { CSSTransition } from "react-transition-group";

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
      return;
    }
    this.hndlBtnNext();
  };
  hndlBtnNext = () => {
    this.props.toggleModal();
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
          <CSSTransition
            in={this.modal}
            appear
            timeout={250}
            classNames={s}
            unmountOnExit
          >
            <div className={s.modalBody}>
              <button
                type="button"
                className={s.modalBtn}
                onClick={this.hndlBtnNext}
              ></button>
              {this.props.children}
            </div>
          </CSSTransition>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
