import React from 'react'
import s from './LoginPageDecoration.module.css'

const LoginPageDecoration = () => {
    return (
        <section className={s.decoration}>
            <div className={s.decspot}></div>
            <div className={s.decstrawberry}></div>
            <div className={s.decleaves}></div>
            <div className={s.decbanana}></div>
        </section>
    );
}

export default LoginPageDecoration;