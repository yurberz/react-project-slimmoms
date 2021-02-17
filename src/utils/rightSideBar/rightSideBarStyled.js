import styled from "styled-components";
import bgTablet from "../../img/rightSideBarBottom@1x.png";

export const Section = styled.section`
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;

  h2 {
    margin-bottom: 20px;

    font-family: Verdana-Bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #212121;
  }

  p {
    font-family: Verdana;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }

  .dayInfoWrapper {
    margin-bottom: 40px;

    li:not(:last-child) {
      margin-bottom: 15px;
    }

    span {
      float: right;
    }
  }

  .notAllowedWrapper {
    p {
      line-height: 26px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    padding-top: 91px;
    padding-bottom: 91px;
    background-image: url(${bgTablet});
    background-repeat: no-repeat;
    background-position: bottom;
    background-position-x: 436px;

    .dayInfoWrapper {
      margin-right: 60px;
      min-width: 290px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding-top: 146px;
    padding-bottom: 146px;
    width: 330px;
  }

  @media screen and (max-width: 1279px) {
    background-color: #f0f1f3;
  } ;
`;
