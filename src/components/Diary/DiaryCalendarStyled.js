import styled from "styled-components";

const Wrapper = styled.div`
  .only-calendar {
    display: flex;
    align-items: center;
  }

  .input-calendar {
    font-family: Verdana-Bold;
    font-size: 18px;
    line-height: 22px;
    margin-right: 20px;
    width: 120px;
    border: none;
  }
  .input-calendar:hover {
    border: none;
  }
  .input-calendar:hover {
    border: none;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    .input-calendar {
      border: none;
      width: 220px;
      font-weight: 700;
      font-size: 34px;
      line-height: 1.4;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
  }
`;

export default Wrapper;
