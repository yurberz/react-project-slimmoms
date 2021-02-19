import styled from 'styled-components';
import spotTablet from '../../img/spot-tablet.png';
import spotDesc from '../../img/spot.png';
import strawberry from '../../img/strawberry@1x.png';
import leaves from '../../img/leaves@1x.png';
import banana from '../../img/banana@1x.png';



export const HomeContainer = styled.div`

  display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1000;
  width: 100%;
  height: 100%;
  overflow: hidden;


@media screen and (min-width: 768px) {
      display: block;
    min-height: 1024px;
    height: 100%;
  }
@media screen and (min-width: 1280px) {
     min-height: 850px;
  }

  /* decspot ---------------------------------- */
.decspot {
  display: none;

@media screen and (min-width: 768px) {
  
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    top: 461px;
    right: -32px;
    width: 553px;
    height: 750px;
    background-image: url(${spotTablet});
  
}
@media screen and (min-width: 1280px) {
  
    top: 34px;
    right: 0;
    width: 603px;
    height: 816px;
    background-image: url(${spotDesc});
}
}

/* decstrawberry ---------------------------------- */
.decstrawberry {
  display: none;

@media screen and (min-width: 768px) {
  
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    top: 547px;
    right: 68px;
    width: 265px;
    height: 273px;
    background-image: url(${strawberry});
  }

@media screen and (min-width: 1280px) {
      top: 458px;
    right: 2px;
    width: 362px;
    height: 374px;
    background-image: url(${strawberry});
  }
}

/* decleaves ---------------------------------- */
.decleaves {
  display: none;

@media screen and (min-width: 768px) {
  
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    right: 215px;
    top: 455px;
    width: 531px;
    height: 602px;
    transform: rotate(90deg);
    background-image: url(${leaves});
  
}
@media screen and (min-width: 1280px) {
 
    top: 0;
    right: 195px;
    width: 746px;
    height: 846px;
    transform: rotate(0);
    background-image: url(${leaves});
  }
}

/* decbanana ---------------------------------- */
.decbanana {
  display: none;

@media screen and (min-width: 768px) {
  
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    top: 593px;
    right: -249px;
    width: 740px;
    height: 527px;
    background-image: url(${banana});
  
}
@media screen and (min-width: 1280px) {
  
    top: -102px;
    right: -287px;
    width: 773px;
    height: 552px;
    background-image: url(${banana});
  }
}
`;