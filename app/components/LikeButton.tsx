"use client";
import { FC, useState } from "react";
import { IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface LikeButtonProps {
  likeCount: number;
}

const LikeButton: FC<LikeButtonProps> = ({ likeCount }) => {
  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(likeCount);

  const handleLike = () => {
    if (liked) {
      setLike(likeCount++);
    } else {
      setLike(likeCount--);
    }
    setLiked(!liked);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={handleLike} color={liked ? "error" : "default"}>
        <FavoriteIcon />
      </IconButton>
      <Typography variant="body1" style={{ marginLeft: "8px" }}>
        {like}
      </Typography>
    </div>
  );
};

export default LikeButton;
