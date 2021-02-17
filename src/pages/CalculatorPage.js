import React from "react";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import CalculatorPageDecoration from '../components/decoration/CalculatorPageDecoration';

const CalculatorPage = () => {
  return (
    <>
      <CalculatorPageDecoration />
      <CalculatorForm />
    </>
  );
};

export default CalculatorPage;
