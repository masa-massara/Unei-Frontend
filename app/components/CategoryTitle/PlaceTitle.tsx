import React from "react";
import PlaceIcon from "@mui/icons-material/Place";

const PlaceTitle = () => {
  return (
    <div className="flex items-center text-gray-400 font-bold">
      <PlaceIcon />
      <p className="ml-3">場所</p>
    </div>
  );
};

export default PlaceTitle;
