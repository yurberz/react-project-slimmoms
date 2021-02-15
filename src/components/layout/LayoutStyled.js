import styled from "styled-components";

const Div = styled.div`
  max-width: 320px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    min-width: 768px;
    padding-left: 86px;
    padding-right: 86px;
  }

  @media (min-width: 1280px) {
    min-width: 1280px;
    padding-left: 115px;
    padding-right: 115px;
  }
`;

export default Div;
