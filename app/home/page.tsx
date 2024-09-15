"use client";
import PostButton from "@/app/components/PostButton";
import HomeHeader from "../components/Header/HomeHeader";
import Events from "../components/Events";
import SortSegmentedControl from "../components/SortSegmentedControl";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="space-y-4">
        <SortSegmentedControl />
        <Events />
      </div>
      <PostButton />
    </>
  );
}
