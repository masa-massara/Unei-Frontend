export interface EventDetailResponse {
  event: EventDetail;
  [property: string]: any;
}

/**
 * Event
 */
export interface EventDetail {
  comments?: Comment[];
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
  name?: string;
  /**
   * 開催場所
   */
  place?: null | string;
  reactions?: Reaction[];
  tags?: Tag[];
  [property: string]: any;
}

/**
 * Comment
 */
export interface Comment {
  author: User;
  countent: string;
  reactions: Reaction[];
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

/**
 * Reaction
 */
export interface Reaction {
  icon_path: string;
  members: Member[];
  [property: string]: any;
}

export interface Member {
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
