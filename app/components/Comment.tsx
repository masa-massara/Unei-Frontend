"use client";

import { FC } from "react";
import LikeButton from "./LikeButton";
import OptionButton from "./OptionButton";

interface CommentType {
  comment: string;
}

const Comment: FC<CommentType> = ({ comment }) => {
  return (
    <div className="mx-8 my-4 border border-s-current ">
      <div className="ml-2 my-2">
        <OptionButton />
        <span>{comment}</span>
        <LikeButton likeCount={0} />
      </div>
    </div>
  );
};

export default Comment;
