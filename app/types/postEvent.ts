export interface RequestBodyToPostType {
    /**
     * イベントの詳細
     */
    description: string;
    /**
     * イベントの開催日時
     */
    event_date: string;
    /**
     * イベントの開催場所
     */
    location: string;
    /**
     * 最高参加者数
     */
    max_participants: number;
    /**
     * 最低参加者数
     */
    min_participants: number;
    /**
     * イベント名
     */
    name: string;
    /**
     * イベントのタグ群
     */
    tags: string[];
    
}
