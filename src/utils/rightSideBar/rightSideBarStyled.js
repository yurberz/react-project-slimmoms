import styled from "styled-components";

const Section = styled.section`
  background-color: #f0f1f3;
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

    ul {
      /* font-family: Verdana;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      color: #9b9faa; */

      li:not(:last-child) {
        margin-bottom: 15px;
      }

      span {
        float: right;
      }
    }
  }
`;

export default Section;
