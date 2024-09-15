"use client";
import { FC, useState } from "react";
import { Member, Reaction } from "../types/getEvents";

const Stamp: FC<Reaction | Member> = ({ icon_path, likeCount }) => {
	const [liked, setLiked] = useState(false);
	const [like, setLike] = useState(likeCount);

	const handleLike = () => {
		if (liked) {
			setLike(++likeCount);
		} else {
			setLike(likeCount--);
		}
		setLiked(!liked);
	};

	// Todo : 取得した画像をアイコンとする
	return (
		<div className="flex items-center">
			<button
				onClick={handleLike}
				className="flex items-center rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-offset-2"
				style={{
					backgroundColor: "#F9F9F9",
					width: "40px",
					height: "26px",
				}}
			>
				<img
					src={icon_path}
					alt="Reaction"
					width={20}
					height={20}
					style={{
						width: "20px",
						height: "20px",
					}}
				/>
				<span
					className="ml-1 text-gray-500 text-sm"
					style={{
						color: liked ? "red" : "gray", // likedの状態で色を変更
					}}
				>
					{like}
				</span>
			</button>
		</div>
	);
};

export default Stamp;
