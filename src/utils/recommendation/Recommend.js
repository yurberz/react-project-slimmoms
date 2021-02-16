import React, { Component } from "react";
import { Title, Item } from "./RecommendStyled";

const initialState = {
  date: "",
  left: "",
  used: "",
  norm: "",
  prcnt: "",
  unrecommend: [],
};

class Recommend extends Component {
  state = { ...initialState };
  render() {
    const { date, left, used, norm, prcnt } = this.state;
    return (
      <>
        <Title>Сводка за {date}</Title>
        <ul>
          <Item>Осталось {left} ккал</Item>
          <Item>Употреблено {used} ккал</Item>
          <Item>Дневная норма {norm} ккал</Item>
          <Item>n% от нормы {prcnt} ккал</Item>
        </ul>
        <Title>Нерекомендуемые продукты</Title>
        <ul>
          <Item>unrecommend</Item>
        </ul>
      </>
    );
  }
}

export default Recommend;
