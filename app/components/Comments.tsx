"use client";

import { FC } from "react";
import Comment from "./Comment";

interface CommentType {
  comments?: string[];
}
const Comments: FC<CommentType> = ({ comments }) => {
  return (
    <div className="fixed overflow-y-scroll w-11/12 h-[800px]">
      <span className="ml-2">{comments?.length}件のコメント</span>
      <Comment comment="9月16日ではなくて9月17日の方が良いと思います。" />
      <Comment comment="9月16日ではなくて9月17日の方が良いと思います。" />
      <Comment comment="9月16日ではなくて9月17日の方が良いと思います。" />
      <Comment comment="9月16日ではなくて9月17日の方が良いと思います。" />
      <Comment comment="9月16日ではなくて9月17日の方が良いと思います。" />
      <Comment comment="9月16日ではなくて9月17日の方が良いと思います。" />
    </div>
  );
};

export default Comments;
