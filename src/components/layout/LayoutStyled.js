import styled from "styled-components";

const Div = styled.div`
  min-width: 320px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 86px;
    padding-right: 86px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 115px;
    padding-right: 115px;
  }
`;

export default Div;
