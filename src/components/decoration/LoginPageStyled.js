import styled from 'styled-components';
import spotTab from '../../img/spot-tablet.png';
import spotLogin from '../../img/spot-login.png';
import strawberry from '../../img/strawberry@1x.png';
import leavesTab from '../../img/leaves-login-tablet@1x.png';
import leavesDesc from '../../img/leaves-login@1x.png';
import banana from '../../img/banana@1x.png';



export const LoginContainer = styled.div`

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
        background-image: url(${spotTab});
    
}
@media screen and (min-width: 1280px) {
  
        top: 0px;
        right: 0px;
        width: 715px;
        height: 849px;
        background-image: url(${spotLogin});
    }
}

/* decstrawberry ---------------------------------- */
.decstrawberry {
    display: none;

@media screen and (min-width: 768px) {
  
        display: block;
        position: absolute;
        background-repeat: no - repeat;
        top: 412px;
        right: -66px;
        width: 370px;
        height: 382px;
        background-image: url(${strawberry});
    
}
@media screen and (min-width: 1280px) {
  
        top: 165px;
        right: 27px;
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
        top: -97px;
        right: 12px;
        width: 740px;
        height: 842px;
        background-image: url(${leavesTab});
    }

@media screen and (min-width: 1280px) {
        top: -26px;
        right: 250px;
        width: 746px;
        height: 846px;
        background-image: url(${leavesDesc});
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
        top: 366px;
        right: -204px;
        width: 773px;
        height: 552px;
        background-image: url(${banana});
    }
}
`;
