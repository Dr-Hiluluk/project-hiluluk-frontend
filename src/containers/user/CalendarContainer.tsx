import { format } from "date-fns";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.scss";

export interface CalendarContainerprops {
  date: Date;
  onChange: any;
  onChangeMonth: any;
  memoList: any;
}

const CalendarContainer: React.FC<CalendarContainerprops> = ({
  date,
  onChange,
  onChangeMonth,
  memoList,
}) => {
  return (
    <Calendar
      value={date}
      onChange={onChange}
      calendarType="US"
      locale="ko"
      formatDay={(locale, date) => format(date, "d")}
      onActiveStartDateChange={onChangeMonth}
      tileContent={({ date, view }) => {
        const refDate = format(date, "yyyyMMdd");
        const isExist =
          memoList && memoList.find((memo: any) => memo.refDate === refDate);
        return isExist && <div key={refDate} className="dot"></div>;
      }}
    />
  );
};

export default CalendarContainer;
