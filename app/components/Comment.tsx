"use client";

import React, { FC } from "react";
import LikeButton from "./LikeButton";
// import ChatIcon from "@mui/icons-material/Chat";
// import { Button } from "@mui/material";
import Link from "next/link";

interface CommentProps {
  title: string;
  likeCount: number;
}

const Comment: FC<CommentProps> = ({ title, likeCount }) => {
  const color = "bg-red-700";
  return (
    <div className="card bg-base-100 text-primary-content mx-4 my-4 shadow-xl">
      <Link href="/detail">
        <div className="card-body">
          <div className={`badge badge-outline ${color}`}>default</div>
          <span className="card-title text-4xl text-black">{title}</span>
        </div>
      </Link>
      <div className="card-actions justify-start mx-6 mb-4 z-10 ">
        <LikeButton likeCount={likeCount} />
        <LikeButton likeCount={likeCount} />
        <LikeButton likeCount={likeCount} />
      </div>
    </div>
  );
};

export default Comment;
