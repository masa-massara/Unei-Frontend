"use client";
import CommentPost from "../components/CommentPost";
import EventDetail from "../components/EventDetail";
import Comments from "../components/Comments";
import RouteHeader from "../components/Header/RouteHeader";
import SortSegmentedControl from "../components/SortSegmentedControl";

const DetailPage = () => {
  const comments = [
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
  ];

  const headerTitle = "詳細";
  return (
    <div>
      <RouteHeader title={headerTitle} />
      <EventDetail />
      {/* <div className="sticky top-20"> */}
      <div className="my-2">
        <SortSegmentedControl />
      </div>
      {/* </div> */}
      <CommentPost />
      <Comments comments={comments} />
    </div>
  );
};

export default DetailPage;
