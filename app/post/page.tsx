import React from "react";
import postIdea from "../api/postIdea";
import BaseInput from "../components/BaseInput";
import HashTag from "../components/HashTag";

const Post = () => {
  return (
    <div>
      <form action={postIdea}>
        {/**
         * 1.タイトル
         * 2.内容
         * 3.タグ追加 
         * 4.オプション ()
         */}
        <BaseInput title="タイトル" />
        <BaseInput title="内容" />
        <HashTag />
      </form>
    </div>
  );
};

export default Post;
