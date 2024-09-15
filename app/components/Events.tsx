import { useContext } from "react";
import { GroupEventContext } from "../contexts/GroupEventContext";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { EventResponse, EventType } from "../types/getEvents";
import Event from "./Event";

const Events = () => {
	const { setGroupId, setEventId } = useContext(GroupEventContext);
	const router = useRouter();
	const group_id = "1"; // 固定のグループIDを使用

	const fetcher = async (url: string) => {
		const res = await fetch(url);
		return res.json();
	};

	const { data, error, isLoading } = useSWR<EventResponse>(
		`https://mock.apidog.com/m1/666106-637317-default/groups/${group_id}/events`,
		fetcher
	);

	if (error) {
		return <div>failed to load</div>;
	}

	if (isLoading) {
		return <div>loading...</div>;
	}

	if (!data || !Array.isArray(data.events)) {
		return <div>No events found</div>;
	}

	const handleEventClick = (event: EventType) => {
		setGroupId(group_id);
		setEventId(event.id);
		router.push(`/detail`);
	};

	return (
		<div className="w-full overflow-y-scroll h-[800px] flex-col flex items-center gap-5">
			{data?.events?.map((event: EventType, index) => (
				<div key={index} onClick={() => handleEventClick(event)}>
					<Event
						index={index}
						id={event.id}
						name={event.name}
						tags={event.tags}
						reactions={event.reactions}
					/>
				</div>
			))}
		</div>
	);
};

export default Events;
