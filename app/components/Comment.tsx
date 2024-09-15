"use client";

import { FC } from "react";
import Stamp from "./Stamp";
import type { Comment } from "../types/getEventDetail";
import Tags from "./Tag/Tags";

const Comment: FC<Comment> = ({
	countent,
	reactions,
	categories,
	author,
	id,
}) => {
	console.log({
		countent,
		reactions,
		categories,
		author,
		id,
	});
	return (
		<div
			className="ml-16 pl-5 border-l my-5 max-w-sm "
			style={{ borderLeftWidth: "thick" }}
		>
			<Tags tags={categories} />
			<span className="text-lg my-5">{countent}</span>
			<Stamp
				likeCount={0}
				icon_path={reactions?.[0]?.icon_path}
				name={reactions?.[0].name}
			/>
		</div>
	);
};

export default Comment;
