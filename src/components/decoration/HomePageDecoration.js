import React from 'react'
// import s from './HomePageDecoration.module.css'
import { HomeContainer } from './HomePageStyled';

const HomePageDecoration = () => {
    return (
        <HomeContainer >
            <div className="decspot"></div>
            <div className="decstrawberry"></div>
            <div className="decleaves"></div>
            <div className="decbanana"></div>
        </HomeContainer>
    );
}

export default HomePageDecoration;