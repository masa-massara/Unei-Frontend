import { EventsResponse, EventType } from "../types";

import Event from "./Event";
import useSWR from "swr";

const Comments = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json();
  };

  const { data, error, isLoading } = useSWR<EventsResponse>(
    "https://mock.apidog.com/m1/666106-637317-default/groups/1/events",
    fetcher
  );

  console.table(data);

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  // // データが存在し、eventsが配列であることを確認
  if (!data || !Array.isArray(data.events)) {
    return <div>No events found</div>;
  }

  return (
    <div className="fixed mx-4 my-4 overflow-y-scroll w-11/12 h-[800px]">
      {data?.events?.map((event: any) => {
        return (
          <Event key={event.comments_id} name={event.name} tags={event.tags} />
        );
      })}
    </div>
  );
};

export default Comments;
