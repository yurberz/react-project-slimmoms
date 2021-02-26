import styled from "styled-components";

const Div = styled.div`
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 330px) {
    margin-left: auto;
    margin-right: auto;
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export default Div;
