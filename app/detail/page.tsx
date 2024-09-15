"use client";
import { useState } from "react";
import CommentPost from "../components/CommentPost";
import EventDetail from "../components/EventDetail";
import Comments from "../components/Comments";
import RouteHeader from "../components/Header/RouteHeader";
import SortSegmentedControl from "../components/SortSegmentedControl";
import FixedButton from "../components/FixedButton";

const DetailPage = () => {
  const comments = [
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
  ];

  const [isCommentPostVisible, setIsCommentPostVisible] = useState(false);
  const headerTitle = "詳細";

  const onClickPostComment = () => {
    setIsCommentPostVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <RouteHeader title={headerTitle} prePath={"/detail"} />
      <EventDetail />
      <div className="my-2">
        <SortSegmentedControl />
      </div>
      {!isCommentPostVisible && (
        <FixedButton link={""} onClick={onClickPostComment} />
      )}
      {isCommentPostVisible && <CommentPost />}
      <Comments comments={comments} />
    </div>
  );
};

export default DetailPage;
