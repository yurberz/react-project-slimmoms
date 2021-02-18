import styled from "styled-components";

const WrapCalc = styled.div`
  width: 290px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
  margin-bottom: 80x;

  @media (min-width: 768px) {
    width: 605px;
    height: 420px;
    margin-top: 100px;
    margin-bottom: 74px;
    margin-left: 87px;
    margin-right: 76px;
  }
  @media (min-width: 1280px) {
    width: 605px;
    height: 447px;
    margin-top: 146px;
    margin-bottom: 111px;
    margin-left: 115px;
    margin-right: 25px;
  }
`;
const TitleForm = styled.h2`
  font-family: "Verdana-Bold";
  font-size: 18px;
  line-height: 1.44;
  color: #212121;
  /* margin-bottom: 40px; */
  margin-bottom: 30px;
  @media (min-width: 768px) {
    width: 605px;
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 60px;
  }
  @media (min-width: 1280px) {
    width: 605px;
    font-size: 34px;
    line-height: 1.205;
    margin-bottom: 68px;
  } ;
`;

const InnerDiv = styled.div`
  /* outline: 1px solid tomato; */
  @media (min-width: 768px) {
    margin: -15px;
    height: 200px;
    width: 510px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-between;
  }
`;
const WrapInput = styled.div`
  /* outline: 1px solid green; */
  position: relative;
  width: 240px;
  height: 26px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 240px;
    height: 36px;
    margin: 15px;
  }
`;
const WrapRadio = styled.div`
  /* outline: 1px solid green; */
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 240px;
  /* height: 46px; */
  height: 20px;
  @media (min-width: 768px) {
    /* height: 55px; */
    margin: 15px;
  }
`;

const InputCalc = styled.input`
  /* position: relative; */
  font-family: "Verdana-Bold";
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;

  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  width: 100%;
  height: 26px;
  &:focus {
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #9b9faa;
  }
  &:invalid {
    border-bottom: 2px solid red;
  }
`;
const LabelCalc = styled.label`
  position: absolute;
  font-family: "Verdana-Bold";
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #9b9faa;
  /* ${InputCalc}:focus & {
    transform: translateY(-55%);
  } */
`;

const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  font-family: "Verdana";
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #9b9faa;

  &:not(:last-child) {
    margin-right: 28px;
  }

  &:checked {
    font-family: "Verdana-Bold";
    color: #fc842d;
  }
`;
const InputRadio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;

const Svg = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

const Span = styled.span`
  color: ${(props) => (props.checked ? "#fc842d" : "#9b9faa")};
  font-family: ${(props) => (props.checked ? "Verdana-Bold" : "Verdana")};
`;

const Text = styled.p`
  font-family: "Verdana-Bold";
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #9b9faa;
  @media (min-width: 768px) {
    margin-left: 15px;
  }
`;

const FormButton = styled.button`
  display: block;
  width: 176px;
  height: 44px;
  background: #fc842d;
  box-sizing: border-box;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  outline: none;
  border: transparent;

  font-family: "Verdana-Bold";
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  margin: 60px 0 0 0;
  color: #fff;

  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    margin-top: 60px;
    margin-left: 0;
  }
  @media (min-width: 1280px) {
    margin-top: 60px;
    margin-left: 280px;
  }
`;

export {
  TitleForm,
  LabelCalc,
  InputCalc,
  WrapCalc,
  LabelRadio,
  InputRadio,
  WrapInput,
  InnerDiv,
  WrapRadio,
  Svg,
  Text,
  Span,
  FormButton,
};
