import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const CalendarTitle = () => {
  return (
    <div className="flex items-center text-gray-400 font-bold">
      <CalendarMonthOutlinedIcon />
      <p className="ml-3">予定日</p>
    </div>
  );
};

export default CalendarTitle;
