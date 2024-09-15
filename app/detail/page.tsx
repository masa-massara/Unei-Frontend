"use client";
import { Button } from "@mui/material";
import React from "react";
import Tabs from "../components/Tabs";
import CommentPost from "../components/CommentPost";
import ChatIcon from "@mui/icons-material/Chat";
import EventDetail from "../components/EventDetail";
import Comments from "../components/Comments";
import PostButton from "../components/PostButton";
import RouteHeader from "../components/Header/RouteHeader";

const DetailPage = () => {
  const comments = [
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
  ];
  return (
    <div>
      <RouteHeader />
      <EventDetail />
      <Tabs />
      <CommentPost />
      <Comments comments={comments} />
    </div>
  );
};

export default DetailPage;
