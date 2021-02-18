import styled from "styled-components";

export const Section = styled.section`
  padding-top: 115px;
  padding-bottom: 0px;

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
    position: relative;
    padding-top: 230px;
    padding-bottom: 0px;
    h2 {
      margin-bottom: 23px;
    }

    .dayInfoWrapper {
      margin-right: 60px;
      width: 491px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding-top: 146px;
    padding-bottom: 146px;
    width: 330px;
  }
`;
