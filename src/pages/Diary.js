import { Component } from "react";
import DiaryAddProduct from "../components/Diary/DiaryAddProduct";
import DiaryList from "../components/Diary/DiaryList";
import DiaryStyle from "../components/Diary/DiaryStyled"

class Diary extends Component {
  
    render() {
    return(
        <DiaryStyle>
            <DiaryAddProduct />
            <DiaryList/>
        </DiaryStyle>
        );
    }
}

export default Diary;

