import { FC } from "react";
import { CommentReaction, Tag } from "../types/getEventDetail"; // Tag 型のインポート
import Tags from "./Tag/Tags";
import Stamps from "./Stamps";
import PeopleTitle from "./CategoryTitle/PeopleTitle";
import PlaceTitle from "./CategoryTitle/PlaceTitle";
import CalendarTitle from "./CategoryTitle/CalendarTitle";

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
  tags,
  reactions,
}) => {
  console.log(tags);

  return (
    <div className="border bottom-10 border-b-black">
      <div className="card-body">
        <Tags tags={tags} />
        <h1 className="card-title text-black font-bold">{name}</h1>
        <p>{description}</p>
        <div className="mb-4">
          <CalendarTitle />
          <PlaceTitle />
          <PeopleTitle />
        </div>
        <Stamps id="" reactions={reactions} />
      </div>
    </div>
  );
};

export default EventDetail;
