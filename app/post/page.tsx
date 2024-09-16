"use client";
import React, { useState } from "react";
import axios from "axios";
import BaseInput from "../components/BaseInput";
import RouteHeader from "../components/Header/RouteHeader";

import CalendarTitle from "../components/CategoryTitle/CalendarTitle";
import PlaceTitle from "../components/CategoryTitle/PlaceTitle";
import PeopleTitle from "../components/CategoryTitle/PeopleTitle";
import CreateButton from "../components/CreateButton";
import HashTagUI from "../components/AddHash";
import { RequestBodyToPostType } from "../types/postEvent";

const Post = () => {
  const [formData, setFormData] = useState<RequestBodyToPostType>({
    description: "",
    event_date: "",
    location: "",
    max_participants: 0,
    min_participants: 0,
    name: "",
    tags: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // 数値フィールドの処理
    const numericFields = ["max_participants", "min_participants"];
    const parsedValue = numericFields.includes(name) ? Number(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };

  // タグが更新されたときの処理
  const handleAddTag = (tags: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: tags,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    try {
      const response = await axios.post(
        "https://mock.apidog.com/m1/666106-637317-default/groups/3307bda6-61f6-480f-af5d-eec2f15a1897/events",
        formData
      );
      console.log("サーバーからのレスポンス:", response.data);
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  };

  return (
    <>
      <RouteHeader title={"投稿"} prePath={"/home"} />
      <div className="flex items-center justify-center w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-12 w-96">
            <div className="my-2 w-full">
              <p className="font-bold text-lg p-1">タグ追加</p>
              <HashTagUI onAddTag={handleAddTag} />
            </div>
            <div className="my-2 w-full">
              <BaseInput
                title="タイトル"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="my-2 w-full">
              <BaseInput
                title="内容"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-24">
            <p className="font-bold text-2xl">追加情報を入力</p>
            <div className="flex items-center justify-between my-8 pr-20">
              <CalendarTitle />
              <input
                type="date"
                name="event_date"
                className="border w-36"
                value={formData.event_date}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between my-8 pr-20">
              <PlaceTitle />
              <input
                type="text"
                name="location"
                className="border w-36"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between my-8 pr-20">
              <PeopleTitle />
              <input
                type="range"
                name="max_participants"
                min={0}
                max="100"
                className="range w-36"
                value={formData.max_participants}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <CreateButton name={"作成する"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Post;
