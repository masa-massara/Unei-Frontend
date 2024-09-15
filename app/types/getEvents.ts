export interface EventResponse {
  events: EventType[];
  [property: string]: any;
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
  tags?: Tag[];
  [property: string]: any;
}

/**
 * Reactions
 */
export interface Reaction {
  icon_path: string;
  members: Member[];
  [property: string]: any;
}

export interface Member {
  icon_path?: string;
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
