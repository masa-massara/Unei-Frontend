"use client";

import React, { FC } from "react";
import Link from "next/link";
import { EventType } from "../types/getEvents";
import Stamps from "./Stamps";
import Card from "./Card";
import Tags from "./Tag/Tags";

// event.reactionsを渡す
const Event: FC<EventType> = ({ id, name, tags, reactions }) => {
	console.log(reactions);
	return (
		<Card>
			<Link
				href={{
					pathname: "/detail",
					query: { event_id: id },
				}}
			>
				<Tags tags={tags} />
				<h2 className="font-bold text-2xl py-6">{name}</h2>
			</Link>
			<Stamps reactions={reactions} id={id} />
		</Card>
	);
};

export default Event;
