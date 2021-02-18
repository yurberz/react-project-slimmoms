import React from "react";
import s from "./DailyCalorieInTake.module.css";

const DailyCalorieIntake = ({ dailyRate, notAllowed }) => {
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
        {console.log(notAllowed)}
        Продукты, которые вам не рекомендуется употреблять
      </h2>
      <ol className={s.productsList}>
        <li className={s.productsItem}>Сало</li>
        <li className={s.productsItem}>Пиво</li>
        <li className={s.productsItem}>Фаст-фуд</li>
        <li className={s.productsItem}>Хлеб</li>
      </ol>

      <button className={s.button} onClick={() => {}}>
        Начать худеть
      </button>
    </div>
  );
};

export default DailyCalorieIntake;
