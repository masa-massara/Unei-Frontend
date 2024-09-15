"use client";
import { FC, useState } from "react";
import { Typography } from "@mui/material";
import { Member, Reaction } from "../types/getEvents";

const Stamp: FC<Reaction | Member> = ({ icon_path, likeCount }) => {
  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(likeCount);

  const handleLike = () => {
    if (liked) {
      setLike(++likeCount);
    } else {
      setLike(likeCount--);
    }
    setLiked(!liked);
  };

  // Todo : 取得した画像をアイコンとする
  return (
    <div className="flex items-center">
      <button
        onClick={handleLike}
        className={`p-2 rounded-full border ${
          liked
            ? "text-red-500 border-red-500"
            : "text-gray-500 border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
      >
        <img src={icon_path} alt="test" width={32} height={32} />
        {/* <FavoriteIcon /> */}
      </button>
      <Typography variant="body1" className="ml-2">
        {like}
      </Typography>
    </div>
  );
};

export default Stamp;
