export interface EventsResponse {
  events?: Event[] | null;
}

export interface Event {
  comments_id?: string;
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
  /**
   * タグが配列で入る
   */
  tags: The3321602[];
}

/**
 * React
 *
 * Tag
 */
export interface The3321602 {
  color: string;
  name: string;
  likeCount: number;
}
