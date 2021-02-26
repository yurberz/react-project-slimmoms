import styled from "styled-components";
import logoMobile from "../../svg/logo-mobile.svg";
import logoTablet from "../../svg/logo-tablet.svg";
import logoDesktop from "../../svg/logo-desktop.svg";

const AppHeader = styled.header`
  font-family: GothamPro-Bold;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  width: inherit;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e0e0e0;
    padding: 18px 15px;

    @media screen and (min-width: 768px) {
      padding: 17px 87px 19px 69px;
    }

    @media screen and (min-width: 1280px) {
      border: none;
      padding: 82px 90px;
      align-items: flex-end;
    }
  }

  .logo {
    background-image: url(${logoMobile});
    width: 46.67px;
    height: 44px;
    background-repeat: no-repeat;

    @media screen and (min-width: 768px) {
      background-image: url(${logoTablet});
      width: 162.3px;
    }

    @media screen and (min-width: 1280px) {
      background-image: url(${logoDesktop});
      width: 166.41px;
      height: 66px;
      margin-bottom: 6px;
    }
  }

  .registeredLogo {
    background-image: url(${logoTablet});
    width: 162.3px;

    @media screen and (min-width: 1280px) {
      background-image: url(${logoDesktop});
      width: 166.41px;
    }
  }

  .menuButton {
    height: 24px;
    width: 24px;
    padding: 0;
    border: none;
    background-color: inherit;

    :focus {
      outline: none;
    }

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }

  .commonList {
    display: flex;

    @media screen and (min-width: 1280px) {
      margin-left: 22px;
      border-left: 2px solid #e0e0e0;
      padding: 9px 22px;
    }

    li:not(:last-child) {
      margin-right: 15px;
    }

    .link {
      text-decoration: none;
      color: #9b9faa;
    }

    .active-link {
      color: #212121;
    }
  }

  .onMainBarList {
    display: none;

    @media screen and (min-width: 1280px) {
      display: flex;
    }
  }

  .onSubBar {
    position: absolute;
    z-index: 999;
    background-color: #264061;
    width: inherit;
    height: 50%;
    text-align: center;
    padding: 70px 0;
    font-family: Verdana;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.22;

    @media screen and (min-width: 768px) {
      padding: 108px 0;
      font-size: 24px;
      line-height: 1.2;
    }

    @media screen and (min-width: 1280px) {
      display: none;
    }

    li:not(:last-child) {
      margin-bottom: 30px;
    }

    .link {
      text-decoration: none;
      color: #9b9faa;
    }

    .active-link {
      color: #ffffff;
    }
  }

  .userInfo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 4px 0 4px 15px;
    background-color: #eff1f3;

    @media screen and (min-width: 768px) {
      display: none;
    }

    button {
      padding: 9px 15px;
      margin-left: 15px;
      border: none;
      border-left: 2px solid #e0e0e0;
      color: #9b9faa;
      font-family: inherit;
      background-color: inherit;
      font-size: inherit;

      :focus {
        outline: none;
      }

      :hover {
        color: black;
      }
    }
  }

  .onMainBarInfo {
    display: none;
    background-color: inherit;

    @media screen and (min-width: 768px) {
      display: flex;
      margin-right: 35px;
    }

    @media screen and (min-width: 1280px) {
      margin: 0;
      padding-bottom: 0;
    }
  }

  .mainBarSubContainer {
    display: flex;
    align-items: center;

    @media screen and (min-width: 1280px) {
      margin: 0;
      align-items: flex-end;
    }
  }

  .secondaryContainer {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media screen and (min-width: 1280px) {
      align-items: flex-end;
      width: inherit;
    }
  }
`;

export default AppHeader;
