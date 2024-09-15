"use client";

import { FC } from "react";
import Comment from "./Comment";
import { EventDetail } from "../types/getEventDetail";

const Comments: FC<EventDetail> = ({ comments }) => {
  return (
    <div className="w-11/12 h-[800px]">
      <span className="ml-2">{comments?.length}件のコメント</span>
      {comments?.map((comment) => (
        <Comment
          countent={comment.countent}
          author={comment.author}
          reactions={comment.reactions}
        />
      ))}
    </div>
  );
};

export default Comments;
