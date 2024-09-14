"use client";
import Comments from "@/app/components/Comments";
import PostButton from "@/app/components/PostButton";
import Header from "../components/Header";
import Tab from "../components/Tab";

export default function Home() {
  /**
   * Todo
   * 1.団体のロゴと名前をヘッダーに表示する
   * 2.タグの検索のモーダルを作成する
   * 3.アイコンを取得して表示する
   */
  return (
    <div className="space-y-4">
      <div className="sticky top-0 bg-white z-50">
        <Header />
        <Tab />
      </div>
      <Comments />
      <PostButton />
    </div>
  );
}
