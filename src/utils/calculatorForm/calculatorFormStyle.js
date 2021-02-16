import styled from "styled-components";

const WrapCalc = styled.div`
  outline: 1px solid teal;
  margin-left: 5px;
  padding-left: 10px;
  width: 250px;
  @media (min-width: 768px) {
    width: 605px;
    height: 447px;
  }
`;
const InnerDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    height: 185px;
    flex-direction: column;
  }
`;

const TitleForm = styled.h2`
  font-family: Verdana;
  font-style: normal;
  font-weight: bold;
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

const LabelCalc = styled.label`
  /* position: absolute; */
  display: block;
  font-family: Verdana;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

const InputCalc = styled.input`
  position: relative;
  font-family: Verdana;
  font-style: normal;
  font-weight: bold;
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
`;

const LabelRadio = styled.label`
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.214;
  letter-spacing: 0.04em;
  &:not(:last-child) {
    margin-right: 28px;
  }
  &:hover {
    font-weight: bold;
    color: #fc842d;
  }
`;

const InputRadio = styled.input`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  width: 20px;
  height: 20px;
  margin-left: 0;
  margin-top: 8px;
  margin-bottom: 41px;
  border-radius: 50%;
`;
const WrapInput = styled.div`
  position: relative;
  width: 240px;
  height: 26px;
  margin-bottom: 30px;
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
};
