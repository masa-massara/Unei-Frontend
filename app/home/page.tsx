"use client";
import PostButton from "@/app/components/PostButton";
import HomeHeader from "../components/Header/HomeHeader";
import Tabs from "../components/Tabs";
import Events from "../components/Events";
import RouteHeader from "../components/Header/RouteHeader";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="fixed space-y-4">
        <Tabs />
        <Events />
      </div>
      <PostButton />
    </>
  );
}
