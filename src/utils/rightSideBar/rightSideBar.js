import React, { Component } from "react";
import Section from "./rightSideBarStyled";

const initialState = {
  date: "",
  left: "",
  used: "",
  norm: "",
  prcnt: "",
  unrecommend: [],
};

class RightSideBar extends Component {
  state = { ...initialState };
  render() {
    // const { date, left, used, norm, prcnt } = this.state;

    // <div>
    //     <div>
    //         <h2 >Сводка за </h2>
    //         <ul>
    //             <li>
    //                 <p>Осталось
    //                 <span>
    //                         000 ккал
    //                     </span></p>
    //             </li>
    //             <li>
    //                 <p>Употреблено
    //                 <span>
    //                          000 ккал
    //                     </span></p>
    //             </li>
    //             <li >
    //                 <p >Дневная норма
    //                 <span>
    //                         000 ккал
    //                     </span></p>
    //             </li>
    //             <li>
    //                 <p>n% от нормы
    //                 <span >
    //                         000 %}
    //                     </span></p>
    //             </li>
    //         </ul>
    // <div>
    //   <h3>Нерекомендуемые продукты</h3>
    //
    //     <ul>
    //         <li>
    //           <p>apple</p>
    //         </li>
    //     </ul>
    //
    //     <ul>
    //       <li>
    //         <p>Здесь будет отображаться Ваш рацион</p>
    //       </li>
    //     </ul>
    //   )}
    // </div>;

    return (
      <Section>
        <div className="dayInfoWrapper">
          <h2>Сводка за 17.02.2021</h2>
          <ul>
            <li>
              <p>
                Осталось
                <span>000 ккал</span>
              </p>
            </li>
            <li>
              <p>
                Употреблено
                <span>000 ккал</span>
              </p>
            </li>
            <li>
              <p>
                Дневная норма
                <span>000 ккал</span>
              </p>
            </li>
            <li>
              <p>
                n% от нормы
                <span>000 ккал</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="notAllowedWrapper">
          <h2>Нерекомендуемые продукты</h2>
          <div>
            <p>
              Apple, Carrot, Pineapple, Apple, Carrot, Pineapple,Apple, Carrot,
              Pineapple
            </p>
          </div>
        </div>
      </Section>
    );
  }
}

export default RightSideBar;
