import React from 'react'
import s from './HomePageDecoration.module.css'

const HomePageDecoration = () => {
    return (
        <div className={s.decoration} >
            <div className={s.decspot}></div>
            <div className={s.decstrawberry}></div>
            <div className={s.decleaves}></div>
            <div className={s.decbanana}></div>
        </div>
    );
}

export default HomePageDecoration;