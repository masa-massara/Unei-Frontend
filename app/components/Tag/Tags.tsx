import React from "react";
import Tag from "./Tag";

type TagProps = {
	name: string;
	color?: string;
	icon?: React.ReactNode; // アイコンを受け取る
};

type TagsProps = {
	tags?: TagProps[]; // 複数のTagを含む配列を受け取る
};

const Tags = ({ tags }: TagsProps) => {
	return (
		<div className="flex flex-wrap gap-2">
			{/* タグを整列させるためのflexbox */}
			{tags?.map((tag, index) => (
				<Tag key={index} name={tag.name} color={tag.color} />
			))}
		</div>
	);
};

export default Tags;
