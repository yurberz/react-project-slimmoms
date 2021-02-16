import React from 'react'
import s from './Decoration.module.css'

const Decoration = () => {
    return (
        <section className={s.decoration} >
            <div className={s.decspot}></div>
            <div className={s.decstrawberry}></div>
            <div className={s.decleaves}></div>
            <div className={s.decbanana}></div>
        </section>
    );
}

export default Decoration;