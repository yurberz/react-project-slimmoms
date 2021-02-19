import { Component } from "react";
import { connect } from "react-redux";
import { Section } from "./RightSideBarStyled";
import getUserInfoSelectors from "../../redux/selectors/getUserInfoSelectors";

class RightSideBar extends Component {
  render() {
    const { daySummary, notAllowedProducts } = this.props;
    daySummary.forEach((element) => console.log(element));
    console.log(Object.keys(daySummary));

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
          <div className="notAllowedProductsList">
            {notAllowedProducts.map((product) => (
              <p key={product}>{product}, </p>
            ))}
          </div>
        </div>
      </Section>
    );
  }
}

const mSTP = (state) => ({
  daySummary: getUserInfoSelectors.getDaySummary(state),
  notAllowedProducts: getUserInfoSelectors.getNotAllowrdProducts(state),
});

export default connect(mSTP)(RightSideBar);
