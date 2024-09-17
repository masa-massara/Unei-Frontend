"use client";

import { FC } from "react";
import type { Comment } from "../types/getEventDetail";
import Tags from "./Tag/Tags";
import Stamps from "./Stamps";

const Comment: FC<Comment> = ({ countent, reactions, categories, id }) => {
	return (
		<div
			className="ml-16 pl-5 border-l my-5 max-w-xs "
			style={{ borderLeftWidth: "thick" }}
		>
			<Tags tags={categories} />
			<p className="text-lg my-4">{countent}</p>
			<Stamps reactions={reactions} id={id} />
		</div>
	);
};

export default Comment;
