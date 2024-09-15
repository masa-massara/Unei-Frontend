"use client";
import CommentPost from "../components/CommentPost";
import EventDetail from "../components/EventDetail";
import RouteHeader from "../components/Header/RouteHeader";

const DetailPage = () => {
  const headerTitle = "コメント";
  return (
    <div>
      <RouteHeader title={headerTitle} prePath={"/detail"} />
      <EventDetail />
      <CommentPost />
    </div>
  );
};

export default DetailPage;
