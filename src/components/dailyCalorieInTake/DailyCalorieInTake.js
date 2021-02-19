import React from "react";
import s from "./DailyCalorieInTake.module.css";
import { Link } from "react-router-dom";

const DailyCalorieIntake = ({ dailyRate, notAllowed, hndlBtnNext }) => {
  // const history = useHistory();

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
        {/* {notAllowed && console.log(notAllowed)} */}
        Продукты, которые вам не рекомендуется употреблять
      </h2>
      <ol className={s.productsList}>
        {notAllowed && notAllowed.map((item, idx) => <li key={idx}>{item}</li>)}
        {/* <li className={s.productsItem}>Сало</li>
        <li className={s.productsItem}>Пиво</li>
        <li className={s.productsItem}>Фаст-фуд</li>
        <li className={s.productsItem}>Хлеб</li> */}
      </ol>

      <button className={s.button} onClick={() => {}}>
        <Link to="/registration" onClick={onStartClick}>
          Начать худеть
        </Link>
      </button>
    </div>
  );
};

export default DailyCalorieIntake;
