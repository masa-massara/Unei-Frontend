"use client";
import React from "react";
import CommentPost from "@/app/components/CommentPost";
import EventDetail from "@/app/components/EventDetail";
import Comments from "@/app/components/Comments";
import RouteHeader from "@/app/components/Header/RouteHeader";
import useSWR from "swr";
import { EventDetailResponse } from "@/app/types/getEventDetail";
import { useSearchParams } from "next/navigation";
import SortSegmentedControl from "../components/SortSegmentedControl";

const DetailPage = () => {
  const searchParams = useSearchParams();
  const event_id = searchParams.get("event_id");

  const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json();
  };

  const { data, error, isLoading } = useSWR<EventDetailResponse>(
    `https://mock.apidog.com/m1/666106-637317-default/groups/1/events/${event_id}`,
    fetcher
  );

  console.log(data);

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  // データが存在し、commentsが配列であることを確認
  if (!data || !Array.isArray(data.event.comments)) {
    return <div>No comments found</div>;
  }

  console.log(data.event.tags);
  const comments = data.event.comments;
  const headerTitle = "詳細";
  return (
    <div>
      <RouteHeader title={headerTitle} />
      <EventDetail
        tags={data.event.tags}
        name={data.event.name}
        description={data.event.description}
        reactions={data.event.reactions}
      />
      <div className="my-2">
        <SortSegmentedControl />
      </div>
      <CommentPost />
      <Comments comments={comments} />
    </div>
  );
};

export default DetailPage;
