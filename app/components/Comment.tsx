"use client";

import React, { FC } from "react";
import LikeButton from "./LikeButton";
import ChatIcon from "@mui/icons-material/Chat";
import { Button } from "@mui/material";
import Link from "next/link";

interface CommentProps {
  title: string;
  likeCount: number;
}

const Comment: FC<CommentProps> = ({ title, likeCount }) => {
  const color = "bg-red-700";
  return (
    <div>
      <div className="card bg-primary text-primary-content w-96 my-2 shadow-sm">
        <Link href="/detail">
          <div className="card-body">
            <div className={`badge badge-outline ${color}`}>default</div>
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-center z-10">
              <LikeButton likeCount={likeCount} />
              <Button>
                <ChatIcon />
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Comment;
