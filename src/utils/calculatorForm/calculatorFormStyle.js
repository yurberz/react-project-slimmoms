import styled from "styled-components";

const WrapCalc = styled.div`
  /* outline: 1px solid teal; */
  padding-left: 15px;
  padding-top: 40px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    /* height: 595px; */
    padding-top: 100px;
    padding-bottom: 74px;
    padding-left: 115px;
    padding-right: 25px;
  }
  @media (min-width: 1280px) {
    /* height: 698px; */
    width: 745px;
    padding-top: 50px;
    padding-bottom: 111px;
    padding-left: 87px;
  }
`;
const TitleForm = styled.h2`
  font-family: "Verdana-Bold";
  font-size: 18px;
  line-height: 1.44;
  color: #212121;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 60px;
  }
  @media (min-width: 1280px) {
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
    /* width: 530px; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-between;
  }
`;
const WrapInput = styled.div`
  outline: 1px solid green;
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
  outline: 1px solid green;
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

const LabelCalc = styled.label`
  /* position: absolute; */
  font-family: "Verdana-Bold";
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

const InputCalc = styled.input`
  position: relative;
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
  /* display: none; */
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);

  &:checked {
    color: #fc842d;
  }
`;

const Svg = styled.svg`
  fill: ${(props) => (props.checked ? "#fc842d" : "#9b9faa")};
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

const Span = styled.span`
  color: ${(props) => (props.checked ? "#fc842d" : "#9b9faa")};
`;

const Text = styled.p`
  font-family: "Verdana-Bold";
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-left: 15px;
`;

// const InputRadio = styled.input`
//   visibility: hidden;
//   background: #ffffff;
//   border: 1px solid #e0e0e0;
//   width: 20px;
//   height: 20px;
//   margin-left: 0;
//   margin-top: 8px;
//   margin-bottom: 41px;
//   &:focus {
//     font-weight: bold;
//     color: #fc842d;
//   }

//   @media (min-width: 768px) {
//     margin-top: 19px;
//   }
// `;

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
  // SvgOn,
};
