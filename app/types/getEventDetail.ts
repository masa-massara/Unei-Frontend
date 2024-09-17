/**
 * Request
 */
export interface EventDetailResponse {
	events: The3321599;
}

/**
 * Event
 */
export interface The3321599 {
	comments: Comment[];
	/**
	 * 開催日
	 */
	date?: null | string;
	/**
	 * イベントの詳細説明
	 */
	description?: null | string;
	/**
	 * 名前
	 */
	name: string;
	/**
	 * 開催場所
	 */
	place?: null | string;
	reactions: EventsReaction[];
	tags: Tag[];
}

export interface Comment {
	author: User;
	categories: Category[];
	countent: string;
	id: string;
	reactions: CommentReaction[];
}

/**
 * User
 */
export interface User {
	/**
	 * 名前
	 */
	user_id: string;
}

export interface Category {
	/**
	 * 名前
	 */
	name: string;
}

export interface CommentReaction {
	icon_path: string;
	members: PurpleMember[];
	id: string;
}

export interface PurpleMember {
	/**
	 * アイコンのURL
	 */
	icon_path: string;
	/**
	 * メンバーの名前
	 */
	name: string;
}

export interface EventsReaction {
	icon_path: string;
	members: FluffyMember[];
	id: string;
}

export interface FluffyMember {
	/**
	 * アイコンのURL
	 */
	icon_path: string;
	/**
	 * メンバーの名前
	 */
	name: string;
}

/**
 * Tag
 */
export interface Tag {
	/**
	 * 色
	 */
	color: string;
	/**
	 * 名前
	 */
	name: string;
}
