import styled from 'styled-components';
import rightSideBar from '../../img/rightSideBar@1x.png';
import rightSideBarBottom from '../../img/rightSideBarBottom@1x.png'


export const CalcContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0;
    z-index: -1000;
    width: 100vw;
    min-height: 1160px;
    height: 100%;
    overflow: hidden;

@media screen and (min-width: 768px) {
  
        position: absolute;
        top: 0;
        z-index: -1000;
        width: 100vw;
        min-height: 1024px;
        height: 100%;
        overflow: hidden;
}

@media screen and (min-width: 1280px) {
 
        position: absolute;
        top: 0;
        z-index: -1000;
        width: 100vw;
        height: 100%;
        /* min-height: 850px; */
        min-height: 768px;
        overflow: hidden;
}
.decleaves {
    @media screen and (min-width: 768px) {
                  width: 362px;
            height: 369px;
            position: absolute;
            bottom: 0px;
            right: 0px;
            background-image: url(${rightSideBarBottom});
            background-repeat: no-repeat;
    }
    
    @media screen and (min-width: 1280px) {
                  width: 505px;
            height: 777px;
            position: absolute;
            top: 35px;
            right: 0px;
            background-image: url(${rightSideBar});
            background-repeat: no-repeat;
        
    }
}
`;
