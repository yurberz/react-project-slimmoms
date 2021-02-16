import styled from "styled-components";

const AppHeader = styled.header`
    font-family: GothamPro-Bold;
    font-size: 14px;
    line-height: 0.93;
    letter-spacing: 0.04em;

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
            justify-content: flex-start;
            border: none;
            padding: 82px 90px 0 90px;
        }
    }

    .logo {
        text-decoration: none;
        color: #fc842d;
    }

    .menuButton {
        height: 24px;
        font-size: 12px;

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

    .onMainBar {
        display: none;

        @media screen and (min-width: 1280px) {
            display: flex;
        }
    }

    .onSubBar {
        position: absolute;
        background-color: #264061;
        width: 100%;
        text-align: center;
        padding: 60px 0;
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
`;

export default AppHeader;
