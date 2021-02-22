import styled from "styled-components";
import calendarSvg from "../../svg/calendar.svg";

const Wrapper = styled.div`
  .relative {
    position: relative;
  }
  .data {
    font-family: Verdana;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.4;
    color: #212121;
    align-items: center;
    margin-top: 40px;
  }
  .calendar {
    background-image: url(${calendarSvg});
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
    background-position: center;
    background-position-x: left;
    background-size: cover;
    position: absolute;
    top: 10%;
    left: 18%;
  }
  .button-svg {
    height: 50px;
    width: 50px;
  }

  .triggerButtonWrapper {
    width: 100%;

    display: flex;
    justify-content: center;
  }

  .triggerButton {
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 50%;
    margin-top: 60px;
    margin-bottom: 60px;

    color: #fff;
    background-color: #fc842d;
    font-size: 40px;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }

  .modal {
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;

    position: absolute;
    top: 147px;
    left: 50%;
    transform: translateX(-50%);
  }

  .buttonWrapper {
    width: 100%;

    position: relative;

    & button {
      position: absolute;
      top: -50px;
      left: 12px;

      background-color: transparent;
      border: none;
    }
  }

  .product-scroll {
    max-height: 100px;
    overflow-y: scroll;
    z-index: 1;
    position: relative;
    overscroll-behavior: contain;
    overflow-x: hidden;
    padding-right: 10px;
  }

  .delBtn {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
  }
`;

export default Wrapper;
