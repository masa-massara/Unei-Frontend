import React from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

export const PeopleTitle = () => {
  return (
    <div className="flex items-center text-gray-400 font-bold">
      <PeopleAltOutlinedIcon />
      <p className="ml-3">規模</p>
    </div>
  );
};

export default PeopleTitle;
