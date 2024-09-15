"use client";

import React, { FC } from "react";
import LikeButton from "./LikeButton";
import Link from "next/link";
import { Event } from "../types";

const Comment: FC<Event> = ({ name, tags }) => {
  // コンソールでタグデータを確認
  console.log(tags);

  // タグの色を動的に設定
  const tagColor = tags.length > 0 ? `bg-${tags[0].color}` : "bg-red-700";

  return (
    <div>
      {tags.map((t) => (
        <div key={t.name}>
          <Link
            href={{
              pathname: "/detail",
              query: { name: name, tags: JSON.stringify(t.name) },
            }}
          >
            <div className="card bg-base-100 text-primary-content mx-4 my-4 shadow-xl">
              <div className="card-body">
                <div className="flex flex-wrap space-x-2">
                  <div className={`badge badge-outline ${tagColor}`}>
                    {t.toString()}
                  </div>
                </div>
                <span className="card-title text-4xl text-black">{name}</span>
              </div>
              <div className="card-actions justify-start mx-6 mb-4 z-10">
                {/* likeCountの合計を表示する場合、合計を計算する */}
                <LikeButton
                  likeCount={tags.reduce((sum, tag) => sum + tag.likeCount, 0)}
                />
              </div>
            </div>
          </Link>
        </div>
      ))}
      ;
    </div>
  );
};

export default Comment;
