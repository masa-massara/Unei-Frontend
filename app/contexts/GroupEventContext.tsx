"use client";
import React, { createContext, useState, ReactNode } from "react";

interface GroupEventContextProps {
	groupId: string;
	eventId: string;
	setGroupId: (id: string) => void;
	setEventId: (id: string) => void;
}

export const GroupEventContext = createContext<GroupEventContextProps>({
	groupId: "",
	eventId: "",
	setGroupId: () => {},
	setEventId: () => {},
});

export const GroupEventProvider = ({ children }: { children: ReactNode }) => {
	const [groupId, setGroupId] = useState("");
	const [eventId, setEventId] = useState("");

	return (
		<GroupEventContext.Provider
			value={{ groupId, eventId, setGroupId, setEventId }}
		>
			{children}
		</GroupEventContext.Provider>
	);
};
