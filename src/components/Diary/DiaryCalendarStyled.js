import styled from "styled-components";

const Wrapper = styled.div`
  .only-calendar {
    background-position: center;
    background-position-x: left;
    background-size: cover;
    margin-top: 40px;
  }
  .input-calendar {
    border: none;
    width: 120px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.4;
  }
  .input-calendar:focus {
    border: none;
  }
  .input-calendar:hover {
    border: none;
  }
  @media screen and (min-width: 768px) {
    .only-calendar {
      margin-top: 100px;
    }
    .input-calendar {
      border: none;
      width: 220px;
      font-weight: 700;
      font-size: 34px;
      line-height: 1.4;
    }
  }
`;

export default Wrapper;
