"use client";
import Comments from "@/app/components/Events";
import PostButton from "@/app/components/PostButton";
<<<<<<< HEAD
import Header from "../components/Header";
import Tab from "../components/Tabs";
=======
import Tab from "../components/Tab";
import HomeHeader from "../components/Header/HomeHeader";
>>>>>>> 928f8243cf483abedc44810480a02c8ff02c80f5

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
