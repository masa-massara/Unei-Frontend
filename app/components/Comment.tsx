"use client";

import React, { FC } from "react";
import LikeButton from "./LikeButton";
import ChatIcon from "@mui/icons-material/Chat";
import { Button } from "@mui/material";

interface CommentProps {
  title: string;
  detail: string;
  likeCount: number;
}

const Comment: FC<CommentProps> = ({ title, detail, likeCount }) => {
  return (
    <div>
      <div className="card bg-primary text-primary-content w-96 my-2 shadow-sm">
        <div className="card-body">
          <div className="badge badge-outline">default</div>
          <h2 className="card-title">{title}</h2>
          <p>{detail}</p>
          <div className="card-actions justify-center">
            <LikeButton likeCount={likeCount} />
            <Button
              onClick={() => {
                alert("Chat button clicked!");
              }}
            >
              <ChatIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
