import { FC } from "react";
import OptionButton from "./OptionButton";
import type { EventDetail, Tag } from "../types/getEventDetail";

const EventDetail: FC<EventDetail> = ({
  name,
  date,
  description,
  place,
  tags,
}) => {
  // const tags = [
  //   {
  //     name: "tag1",
  //     color: "red-700",
  //     likeCount: 10,
  //   },
  //   {
  //     name: "tag2",
  //     color: "yellow-500",
  //     likeCount: 20,
  //   },
  // ];
  console.log(tags);

  return (
    <div className="border bottom-10 border-b-black">
      <div className="card-body">
        <div className="flex flex-wrap space-x-2">
          {tags?.map((t: Tag) => (
            <div key={t.name} className={`badge badge-outline bg-${t.color}`}>
              {t.name}
            </div>
          ))}
        </div>
        <h1 className="card-title text-black">{name}</h1>
        <p>{description}</p>

        <OptionButton />
      </div>
    </div>
  );
};

export default EventDetail;
