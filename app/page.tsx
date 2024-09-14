"use client";
import Comments from "./components/Comments";
import PostButton from "./components/PostButton";

export default function Home() {
  return (
    <div className="">
      <Comments />
      {/* PostButton を画面の右下に固定 */}
      <div className="fixed bottom-4 right-4 z-10">
        <PostButton />
      </div>
    </div>
  );
}
