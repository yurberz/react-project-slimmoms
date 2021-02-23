import styled from "styled-components";

const Wrapper = styled.div`
  .diary-list_ul {
    margin-left: auto;
    margin-right: auto;
    padding-right: 7px;
    width: 304px;
    height: 230px;
    overscroll-behavior: contain;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .diary-list_li {
    display: flex;
    align-items: center;
    list-style: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
  }

  .diary-list_li:not(:last-child) {
    margin-bottom: 20px;
  }

  .diary-list_name {
    display: inline-block;
    /* padding-top: 20px; */
    padding-bottom: 10px;
    margin-right: 10px;

    border-bottom: 1px solid #e0e0e0;
    white-space: normal;
    /* overflow: auto; */
    flex: 3 1;
    color: #212121;
    font-size: 14px;
  }
  .diary-list_gramm {
    text-align: center;
    display: inline-block;
    min-width: 43px;
    /* padding-top: 20px; */
    padding-bottom: 10px;
    margin-right: 10px;
    border-bottom: 1px solid #e0e0e0;
    white-space: nowrap;
    /* overflow: auto; */
    color: #212121;
    font-size: 14px;
  }
  .diary-list_kkal {
    text-align: center;
    display: inline-block;
    /* padding-top: 20px; */
    padding-bottom: 10px;
    margin-right: 10px;
    border-bottom: 1px solid #e0e0e0;
    white-space: nowrap;
    /* overflow: auto; */
    color: #212121;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    .diary-list_ul {
      padding-right: 31px;
      width: 589px;
      height: 240px;
    }

    .diary-list_name {
      display: inline-block;
      padding-bottom: 19px;
      margin-right: 31px;
      border-bottom: 1px solid #e0e0e0;
      white-space: nowrap;
      /* overflow: auto; */
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
    }
    .diary-list_gramm {
      text-align: right;
      display: inline-block;
      width: 49.67px;
      /* padding-top: 15px; */
      padding-bottom: 19px;
      margin-right: 31px;
      border-bottom: 1px solid #e0e0e0;
      white-space: nowrap;
      /* overflow: auto; */
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
    }
    .diary-list_kkal {
      text-align: right;
      display: inline-block;
      width: 60px;
      /* padding-top: 15px; */
      padding-bottom: 19px;
      margin-right: 31px;
      border-bottom: 1px solid #e0e0e0;
      white-space: nowrap;
      /* overflow: auto; */
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
    }
    /* .button {
      height: max-content;
      display: inline-block;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0;
      padding: 0;
      border: none;
      background-color: transparent;
    } */
  }
  @media screen and (min-width: 1280px) {
    .diary-list_ul {
      padding-right: 21px;
      width: 600px;
      height: 305px;
    }
    .diary-list_li {
      display: flex;
      align-items: center;
      list-style: none;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
    }
    .diary-list_name {
      display: inline-block;
      width: 239px;
      padding-top: 20px;
      padding-bottom: 10px;
      margin-right: 31px;
      border-bottom: 1px solid #e0e0e0;
      white-space: nowrap;
      /* overflow: auto; */
    }
    .diary-list_gramm {
      text-align: center;
      display: inline-block;
      width: 104.36px;
      padding-top: 20px;
      padding-bottom: 10px;
      margin-right: 31px;
      border-bottom: 1px solid #e0e0e0;
      white-space: nowrap;
      /* overflow: auto; */
    }
    .diary-list_kkal {
      text-align: center;
      display: inline-block;
      width: 104.36px;
      padding-top: 20px;
      padding-bottom: 10px;
      margin-right: 10px;
      border-bottom: 1px solid #e0e0e0;
      white-space: nowrap;
      /* overflow: auto; */
    }
    /* .button {
      height: max-content;
      display: inline-block;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0;
      padding: 0;
      border: none;
      background-color: transparent;
    } */
  }
`;

export default Wrapper;
