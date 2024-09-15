"use client";

import Comment from "./Comment";
import type { Comment as CommentType } from "../types/getEventDetail";

type CommentsProps = {
	comments?: CommentType[];
};

const Comments = ({ comments }: CommentsProps) => {
	return (
		<div>
			<span className="ml-2 font-bold" style={{ color: "#B5B2B2" }}>
				{comments?.length}件のコメント
			</span>
			<div>
				{comments?.map((comment, index) => (
					<Comment
						key={index}
						id={comment.id}
						countent={comment.countent}
						author={comment.author}
						reactions={comment.reactions}
						categories={comment.categories}
					/>
				))}
			</div>
		</div>
	);
};

export default Comments;
