"use client";
import PostButton from "@/app/components/PostButton";
import HomeHeader from "../components/Header/HomeHeader";
import Tabs from "../components/Tabs";
import Events from "../components/Events";

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
      <div className=" space-y-4">
        <Tabs />
        <Events />
        <PostButton />
      </div>
    </>
  );
}
