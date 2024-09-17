export interface EventResponse {
	events: EventType[];
}

/**
 * Event
 */
export interface EventType {
	date?: string;
	description?: string;
	id: string;
	name?: string;
	place?: string;
	reactions?: Reaction[];
	tags?: TagType[];
}

/**
 * Reactions
 */
export interface Reaction {
	icon_path: string;
	members: Member[];
}

export interface Member {
	icon_path?: string;
	name: string;
}

/**
 * TagType
 *
 */
export interface TagType {
	/**
	 * 色
	 */
	color?: string;
	/**
	 * 名前
	 */
	name: string;
}
