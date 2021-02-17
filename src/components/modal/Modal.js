import React, { Component } from "react";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Button from "./button/Button";
import IconClose from "./iconClose/IconClose";
import IconBack from "./iconBack/IconBack";
import s from "./Modal.module.css";

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
      <div id="overlay" className={s.overlay}>
        <CSSTransition
          in={this.props.showModal}
          appear
          timeout={250}
          classNames={s}
          unmountOnExit
        >
          <div className={s.modal}>
            <button
              type="button"
              className={s.closeModalMobileBtn}
              onClick={this.props.toggleModal}
            >
              <IconBack />
            </button>
            <button
              type="button"
              className={s.closeModalBtn}
              onClick={this.props.toggleModal}
            >
              <IconClose />
            </button>
            <div className={s.wrapper}>
              <p className={s.title}>
                Ваша рекомендуемая суточная норма калорий составляет
              </p>
              <div className={s.container}>
                <p className={s.caloriesText}>
                  <span className={s.caloriesValue}>{this.props.calories}</span>
                  ккал
                </p>
                <p className={s.productsTitle}>
                  Продукты, которые вам не рекомендуется употреблять
                </p>
                <ol className={`${s.productsList} ${s.scrollbar}`}>
                  {this.props.products &&
                    this.props.products.map((product, id) => (
                      <li key={id} className={s.productsItem}>
                        {product}
                      </li>
                    ))}
                </ol>
                <Button className={`primary-button ${s.modalButton}`}>
                  <NavLink to="/register" className={s.buttonLink}>
                    Начать худеть
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Modal;
