import { Component } from "react";
import DiaryAddProduct from "../components/Diary/DiaryAddProduct";
import DiaryCalendar from "../components/Diary/DiaryCalendar";
import DiaryForm from "../components/Diary/DiaryForm";
import DiaryInput from "../components/Diary/DiaryInput";
import DiaryList from "../components/Diary/DiaryList";
import DiaryDate from "../components/Diary/DiaryDate"
import DiaryStyle from "../components/Diary/DiaryStyled"

class Diary extends Component {
    state = {
        date: Date.now(),
    }
    
    onHandleChange = event => {
        console.log(event.target.value);
    }
    render() {
    return(
        <DiaryStyle>
            {/* <DiaryForm>
                <DiaryInput type="date" value={this.state.value} onChange={this.onHandleChange}/>
            </DiaryForm> */}
            <DiaryCalendar /> 
            <DiaryAddProduct />
            <DiaryList/>
           <DiaryDate />
        </DiaryStyle>
        );
    }
}

export default Diary;