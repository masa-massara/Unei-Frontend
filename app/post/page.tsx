import React from "react";
import BaseInput from "../components/BaseInput";
import HashTag from "../components/HashTag";
import postEvent from "../api/postEvent";
import RouteHeader from "../components/Header/RouteHeader";

import CalendarTitle from "../components/CategoryTitle/CalendarTitle";
import PlaceTitle from "../components/CategoryTitle/PlaceTitle";
import PeopleTitle from "../components/CategoryTitle/PeopleTitle";
import CreateButton from "../components/CreateButton";
import AddHash from "../components/AddHash";

const Post = () => {
  return (
    <>
      <RouteHeader title={"投稿"} prePath={"/home"} />
      <div className="flex items-center justify-center w-full">
        <form action={postEvent}>
          <div className="mb-12 w-96">
            <div className="my-2 w-full">
              <p className="font-bold text-lg p-1">タグ追加</p>
              <AddHash />
            </div>
            <div className="my-2 w-full">
              <BaseInput title="タイトル" />
            </div>
            <div className="my-2 w-full">
              <BaseInput title="内容" />
            </div>
          </div>
          <div className="mb-24">
            <p className="font-bold text-2xl">追加情報を入力</p>
            <div className="flex items-center justify-between my-8 pr-20">
              <CalendarTitle />
              <input type="date" className="border w-36" />
            </div>
            <div className="flex items-center justify-between my-8 pr-20">
              <PlaceTitle />
              <input type="text" className="border w-36" />
            </div>
            <div className="flex items-center justify-between my-8 pr-20">
              <PeopleTitle />
              <input type="range" min={0} max="100" className="range w-36" />
            </div>
          </div>
          <div className="flex justify-center">
            <CreateButton name={"作成する"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Post;
