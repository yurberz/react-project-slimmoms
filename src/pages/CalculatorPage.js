import React from "react";
import getReccomendation from "../redux/operations/calcOperation";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import Recommend from "../utils/recommendation/Recommend";

const CalculatorPage = () => {
  return (
    <>
      <CalculatorForm loggedUserRecomends={getReccomendation} />
      <Recommend />
    </>
  );
};

export default CalculatorPage;
