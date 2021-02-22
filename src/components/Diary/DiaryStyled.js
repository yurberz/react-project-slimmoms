import styled from "styled-components";
import calendarSvg from "../../svg/calendar.svg";

const Wrapper = styled.div`
  .relative {
    position: relative;
  }
  .data {
    font-family: Verdana;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.4;
    color: #212121;
    align-items: center;
    margin-top: 40px;
  }
  .calendar {
    background-image: url(${calendarSvg});
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
    background-position: center;
    background-position-x: left;
    background-size: cover;
    position: absolute;
    top: 10%;
    left: 18%;
<<<<<<< HEAD

}
.button-svg{
    height: 50px;
    width: 50px;
}
`
=======
  }
  .button-svg {
    height: 50px;
    width: 50px;
  }
`;
>>>>>>> 312281f22a90bbf326e634ac33c5fb1ecaff1d55

export default Wrapper;
