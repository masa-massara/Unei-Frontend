import React, { FC } from "react";
import LikeButton from "./LikeButton";

interface CommentProps {
  title: string;
  detail: string;
}

const Comment: FC<CommentProps> = ({ title, detail }) => {
  return (
    <div>
      <div className="card bg-primary text-primary-content w-96 my-2 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{detail}</p>
          <div className="card-actions justify-center">
            <LikeButton />
            <button className="btn">commentを見る</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
