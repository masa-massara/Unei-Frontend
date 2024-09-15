"use client";
import Comments from "@/app/components/Comments";
import PostButton from "@/app/components/PostButton";
import Tab from "../components/Tab";
import HomeHeader from "../components/Header/HomeHeader";

export default function Home() {
  /**
   * Todo
   * 1.団体のロゴと名前をヘッダーに表示する
   * 2.タグの検索のモーダルを作成する
   * 3.アイコンを取得して表示する
   */
  return (
    <>
      <HomeHeader />
      <div className="min-h-screen space-y-4">
        <Tab />
        <Comments />
        <PostButton />
      </div>
    </>
  );
}
