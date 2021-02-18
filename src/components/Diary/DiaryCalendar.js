import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../icons/CalendarIcon";
import DiaryCalendarStyled from "./DiaryCalendarStyled";
import React from "react";

const DiaryCalendar = () => {
  //only calendar
  const [startDate, setStartDate] = useState(new Date());

  const ref = React.createRef();

  return (
    <DiaryCalendarStyled>
      <div className="only-calendar">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd.MM.yyyy"
          className="input-calendar"
        />

        {/* 
                customInput={<CalendarIcon ref={ref} width="18" height="20" />}/>

            <input type="date" name="date">
                <CalendarIcon width="20" height="18" /> 
            </input>  */}

        <CalendarIcon width="18" height="20" />
      </div>
    </DiaryCalendarStyled>
  );
};

export default DiaryCalendar;
