import { Component } from "react";
import DiaryAddProduct from "../components/Diary/DiaryAddProduct";
import DiaryList from "../components/Diary/DiaryList";
import RightSideBar from "../utils/rightSideBar/rightSideBar";
import DiaryStyle from "../components/Diary/DiaryStyled";
import styled from "styled-components";
import bgLayers from "../img/layersBg.png";
import bgTablet from "../img/rightSideBarBottom@1x.png";

const Background = styled.div`
  position: absolute;
  top: 11px;
  right: 0;
  z-index: -100;
  width: 100vw;
  min-height: 1024px;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #fff, #fff 635px, #f0f1f3 0, #f0f1f3);

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -100;
    width: 100vw;
    min-height: 1024px;
    height: 100%;
    overflow: hidden;
    background: url(${bgTablet}),
      linear-gradient(180deg, #fff, #fff 674px, #f0f1f3 0, #f0f1f3);
    background-repeat: no-repeat;
    background-position: bottom;
    background-position-x: right;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -100;
    width: 100vw;
    min-height: 850px;
    height: 100%;
    background: url(${bgLayers}),
      linear-gradient(
        90deg,
        #fff,
        #fff calc(50% + 105px),
        #f0f1f3 calc(50% + 105px),
        #f0f1f3
      );
    background-repeat: no-repeat;
    background-position: right;
  }
`;

const Div = styled.div`
  padding-top: 40px;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    padding-top: 190px;
    padding-left: 87px;
    padding-right: 87px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-top: 236px;
    padding-left: 115px;
    padding-right: 115px;
  }
`;

class Diary extends Component {
  state = {
    screenWidth: window.innerWidth,
  };

  render() {
    return this.state.screenWidth < 768 ? (
      <>
        <Background />
        <Div>
          <DiaryStyle>
            <DiaryAddProduct mobile={true} />
            <DiaryList />
          </DiaryStyle>
          <RightSideBar />
        </Div>
      </>
    ) : (
      <Background>
        <Background />
        <Div>
          <DiaryStyle>
            <DiaryAddProduct mobile={false} />
            <DiaryList />
          </DiaryStyle>
          <RightSideBar />
        </Div>
      </Background>
    );
    // return (
    //   <>
    //     <Background />
    //     <Div>
    //       <DiaryStyle>
    //         <DiaryAddProduct />
    //         <DiaryList />
    //       </DiaryStyle>
    //       <RightSideBar />
    //     </Div>
    //   </>
    // );
  }
}

export default Diary;
