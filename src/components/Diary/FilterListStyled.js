import styled from "styled-components";

const Wrapper = styled.div`
  /* outline: 1px solid teal; */
  /* background: linear-gradient(180deg, #fff, #fff 110px, #f0f1f3 0, #f0f1f3); */
  background-color: #f0f1f3;
  border: none;
  outline: none;
  .filter-list_li {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: #9b9faa;
  }

  max-height: 100px;
  overflow-y: scroll;
  z-index: 1;
  position: relative;
  overscroll-behavior: contain;
  overflow-x: hidden;
  padding-right: 5px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    top: 47px;
    left: 0;
    width: 243px;
    max-height: 150px;

    /* padding-top: 240px;
    padding-bottom: 0px; */
    /* h2 {
      margin-bottom: 23px; */
  }
  @media screen and (min-width: 1280px) {
    .filter-list_ul {
      /* position: absolute;
      left: 115px;
      background-color: white;
      top: 520px;
      padding: 5px; */
    }
    /* .filter-list_li {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.4;
      color: #9b9faa;
    } */
  }
`;

export default Wrapper;
