import React, { Fragment } from "react";
import HomePageDecoration from "../components/decoration/HomePageDecoration";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";


const Home = () => {
    return (
        <Fragment>
            <HomePageDecoration />
            <CalculatorForm />
        </Fragment>
    );
}

export default Home;