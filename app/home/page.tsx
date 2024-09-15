"use client";
import HomeHeader from "../components/Header/HomeHeader";
import Events from "../components/Events";
import SortSegmentedControl from "../components/SortSegmentedControl";
import FixedButton from "../components/FixedButton";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="space-y-4">
        <SortSegmentedControl />
        <Events />
      </div>
      <FixedButton link="/post" onClick={() => {}} icon_name="post" />
    </>
  );
}
