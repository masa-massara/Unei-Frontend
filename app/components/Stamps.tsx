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
  console.log(reactions?.[0]?.icon_path);
  return (
    <div className="card-actions justify-start mx-6 mb-4 z-10">
      <Stamp likeCount={0} name={""} icon_path={reactions?.[0]?.icon_path} />
      <Stamp likeCount={0} name={""} icon_path={reactions?.[1]?.icon_path} />

      {/** APIが実装終えたら下のコードに移し替え */}
      {/* {reactions?.map((reaction: Reaction) => (
        <Stamp
          key={reaction?.icon_path}
          icon_path={reaction?.icon_path}
          likeCount={reaction}
          name={""}
        />
      ))} */}
    </div>
  );
};

export default Stamps;
