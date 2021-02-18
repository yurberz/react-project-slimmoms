import React, { Fragment } from "react";
import HomePageDecoration from "../components/decoration/HomePageDecoration";
import CalculatorForm from "../utils/calculatorForm/CalculatorForm";
import getReccomendation from "../redux/operations/calcOperation";

const Home = () => {

    return (
        <Fragment>
            <HomePageDecoration />
            <CalculatorForm
                title={"Просчитай свою суточную норму калорий прямо сейчас"}
                getReccomendation={getReccomendation}
            />
        </Fragment>
    );
};


export default Home;
