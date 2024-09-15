import { FC } from "react";
import { CommentReaction, Tag } from "../types/getEventDetail"; // Tag 型のインポート
import Tags from "./Tag/Tags";
import Stamps from "./Stamps";

type EventDetailProps = {
	name: string;
	date?: string | null;
	description?: string | null;
	place?: string | null;
	tags?: Tag[];
	reactions?: CommentReaction[];
};

const EventDetail: FC<EventDetailProps> = ({
	name,
	description,
	place,
	tags,
	reactions,
}) => {
	console.log(tags);

	return (
		<div className="border bottom-10 border-b-black">
			<div className="card-body">
				<Tags tags={tags} />
				<h1 className="card-title text-black">{name}</h1>
				<p>{description}</p>
				<Stamps id="" reactions={reactions} />
			</div>
		</div>
	);
};

export default EventDetail;
