import { FC } from "react";
import Stamp from "./Stamp";
import { EventType } from "../types/getEvents";

const Stamps: FC<EventType> = ({ reactions }) => {
  /**
   * Todo
   * 1. Stampコンポーネントをmapで並べる
   * 2. スタンプを選ぶボタンを作る
   * 3. スタンプを長押ししたら押した人の名前が見れる
   */

  return (
    <div className="card-actions justify-start z-10 ml-2 mb-2">
      {/** APIが実装終えたら下のコードに移し替え */}
      {reactions?.map((reaction) => (
        <Stamp
          key={reaction?.icon_path}
          icon_path={reaction?.icon_path}
          likeCount={reaction.members.length}
        />
      ))}
    </div>
  );
};

export default Stamps;
