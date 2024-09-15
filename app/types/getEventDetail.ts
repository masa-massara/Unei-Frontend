/**
 * Request
 */
export interface EventDetailResponse {
	events: The3321599;
	[property: string]: any;
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
	[property: string]: any;
}

export interface Comment {
	author: User;
	categories: Category[];
	countent: string;
	id: string;
	reactions: CommentReaction[];
	[property: string]: any;
}

/**
 * User
 */
export interface User {
	/**
	 * 名前
	 */
	user_id: string;
	[property: string]: any;
}

export interface Category {
	/**
	 * 名前
	 */
	name: string;
	[property: string]: any;
}

export interface CommentReaction {
	icon_path: string;
	members: PurpleMember[];
	id: string;
	[property: string]: any;
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
	[property: string]: any;
}

export interface EventsReaction {
	icon_path: string;
	members: FluffyMember[];
  id: string;
	[property: string]: any;
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
	[property: string]: any;
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
	[property: string]: any;
}
