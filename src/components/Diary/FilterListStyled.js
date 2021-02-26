import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f0f1f3;
  border: none;
  outline: none;
  .filter-list_li {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: #9b9faa;
  }

  .filter-list_li:hover,
  .filter-list_li:focus {
    color: black;
    font-weight: bold;
    cursor: pointer;
  }

  max-height: 100px;
  overflow-y: scroll;
  z-index: 1;
  position: relative;
  overscroll-behavior: contain;
  overflow-x: hidden;
  padding-right: 5px;
  width: 289px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    top: 47px;
    left: 0;
    width: 243px;
    max-height: 150px;
  }
`;

export default Wrapper;
