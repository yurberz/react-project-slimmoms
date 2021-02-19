import { Component } from "react";
import DiaryAddProduct from "../components/Diary/DiaryAddProduct";
import DiaryCalendar from "../components/Diary/DiaryCalendar";
import DiaryList from "../components/Diary/DiaryList";
import RightSideBar from "../utils/rightSideBar/rightSideBar";
import DiaryStyle from "../components/Diary/DiaryStyled";

class Diary extends Component {
  render() {
    return (
      <>
        <DiaryStyle>
          <DiaryCalendar />
          <DiaryAddProduct />
          <DiaryList />
        </DiaryStyle>
        {/* <RightSideBar /> */}
      </>
    );
  }
}

export default Diary;
