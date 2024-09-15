"use client";

import { FC } from "react";
import Stamp from "./Stamp";
import OptionButton from "./OptionButton";
import type { Comment } from "../types/getEventDetail";

const Comment: FC<Comment> = ({ countent, reactions }) => {
  console.log(countent);
  return (
    <div className="mx-8 my-4 border border-s-current ">
      <div className="ml-2 my-2">
        <OptionButton />
        <span className="text-2xl">{countent}</span>
        <Stamp
          likeCount={0}
          icon_path={reactions?.[0]?.icon_path}
          name={reactions?.[0].name}
        />
      </div>
    </div>
  );
};

export default Comment;
