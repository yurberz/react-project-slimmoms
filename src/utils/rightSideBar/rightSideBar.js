import { Component } from "react";
import { connect } from "react-redux";
import { Section } from "./rightSideBarStyled";
import getUserInfoSelectors from "../../redux/selectors/getUserInfoSelectors";
import moment from "moment";

class RightSideBar extends Component {
  render() {
    const { daySummary, notAllowedProducts } = this.props;

    return (
      <Section>
        <div className="dayInfoWrapper">
          <h2>Сводка за {moment(daySummary.date).format("DD.MM.YYYY")}</h2>
          <ul>
            <li>
              <p>
                Осталось
                <span>
                  {daySummary.kcalLeft
                    ? (daySummary.kcalConsumed > daySummary.dailyRate
                        ? 0
                        : Math.round(daySummary.kcalLeft)) + " ккал"
                    : "000 калл"}
                </span>
              </p>
            </li>
            <li>
              <p>
                Употреблено
                <span>
                  {daySummary.kcalConsumed
                    ? Math.round(daySummary.kcalConsumed) + " ккал"
                    : "000 калл"}
                </span>
              </p>
            </li>
            <li>
              <p>
                Дневная норма
                <span>
                  {daySummary.dailyRate
                    ? Math.round(daySummary.dailyRate) + " ккал"
                    : "000 калл"}
                </span>
              </p>
            </li>
            <li>
              <p>
                n% от нормы
                <span>
                  {daySummary.percentsOfDailyRate
                    ? Math.round(daySummary.percentsOfDailyRate) + " %"
                    : "000 калл"}
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className="notAllowedWrapper">
          <h2>Нерекомендуемые продукты</h2>

          {!!notAllowedProducts ? (
            <div className="notAllowedProductsList">
              {notAllowedProducts.map((product) => (
                <p key={product}>{product}, </p>
              ))}
            </div>
          ) : (
            <p>Здесь будет отображаться Ваш рацион</p>
          )}
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
