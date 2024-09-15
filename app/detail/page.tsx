"use client";
import React, { useState } from "react";
import CommentPost from "@/app/components/CommentPost";
import EventDetail from "@/app/components/EventDetail"; // ここを修正
import Comments from "@/app/components/Comments";
import RouteHeader from "@/app/components/Header/RouteHeader";
import useSWR from "swr";
import { EventDetailResponse } from "@/app/types/getEventDetail";
import { useSearchParams } from "next/navigation";
import SortSegmentedControl from "../components/SortSegmentedControl";
import FixedButton from "../components/FixedButton";

const DetailPage = () => {
	const [isCommentPostVisible, setIsCommentPostVisible] = useState(false);
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
  console.log(data?.events.comments);
  

	if (error) {
		return <div>failed to load</div>;
	}

	if (isLoading) {
		return <div>loading...</div>;
	}

	if (!data || !Array.isArray(data.events.comments)) {
		return <div>No comments found</div>;
	}

	const comments = data.events.comments;
	const headerTitle = "詳細";

	const onClickPostComment = () => {
		setIsCommentPostVisible(true);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const closeCommentPost = () => {
		setIsCommentPostVisible(false);
	};

	return (
		<div>
			<RouteHeader title={headerTitle} prePath="/home" />
			<EventDetail
				tags={data.events.tags}
				name={data.events.name}
				description={data.events.description}
				reactions={data.events.reactions}
			/>
			<div className="sticky top-20 my-2">
				<SortSegmentedControl />
			</div>
			{!isCommentPostVisible && (
				<FixedButton
					link={""}
					onClick={onClickPostComment}
					icon_name="comment"
				/>
			)}
			{isCommentPostVisible && (
				<>
					<div
						className="fixed top-0 left-0 w-full h-full z-40 bg-black opacity-10"
						onClick={closeCommentPost}
					></div>

					<div className="fixed bottom-0 left-0 w-full z-50">
						<CommentPost onClose={closeCommentPost} />
					</div>
				</>
			)}
			<Comments comments={comments} />
      
		</div>
	);
};

export default DetailPage;
