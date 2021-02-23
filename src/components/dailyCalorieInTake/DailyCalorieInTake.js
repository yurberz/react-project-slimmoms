import React from "react";
import s from "./DailyCalorieInTake.module.css";
import { Link } from "react-router-dom";
const DailyCalorieIntake = ({ dailyRate, notAllowed, hndlBtnNext }) => {
  // const history = useHistory();
  const filterNotAllowed = notAllowed.filter((product, index) => index < 4);
  const onStartClick = () => {
    hndlBtnNext();
  };
  return (
    <div className={s.container}>
      <p className={s.title}>
        Ваша рекомeндуемая суточная норма калорий составляет
      </p>
      <p className={s.calories}>
        {dailyRate}
        <span className={s.caloriesText}>ккал</span>
      </p>
      <div className={s.line}></div>
      <h2 className={s.products}>
        Продукты, которые вам не рекомендуется употреблять
      </h2>
      <ol className={s.productsList}>
        {notAllowed &&
          filterNotAllowed.map((product, idx) => <li key={idx}>{product}</li>)}
      </ol>
      <button className={s.button} onClick={() => {}}>
        <Link to="/registration" onClick={onStartClick} className={s.link}>
          Начать худеть
        </Link>
      </button>
    </div>
  );
};
export default DailyCalorieIntake;
