"use client";
import Comments from "@/app/components/Comments";
import PostButton from "@/app/components/PostButton";
import Header from "../components/Header";
import Tab from "../components/Tab";
import TagModal from "../components/TagModal";

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="sticky top-0 bg-white z-50">
        <Header />
        <div className="flex items-center mx-4">
          <div className="flex-grow flex justify-center">
            <Tab />
          </div>
          <TagModal />
        </div>
      </div>
      <Comments />
      <PostButton />
    </div>
  );
}
