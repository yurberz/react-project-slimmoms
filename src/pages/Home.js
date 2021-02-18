import React, { Fragment } from "react";
import HomePageDecoration from "../components/decoration/HomePageDecoration";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";


const Home = () => {
    return (
        <Fragment>
            <HomePageDecoration />
            {/* <h2>Просчитай свою суточную
            <br />
                норму калорий прямо сейчас</h2> */}
            <CalculatorForm />
        </Fragment>
    );
}

export default Home;