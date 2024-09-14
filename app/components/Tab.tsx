import { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Link from "next/link";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("/popular");

  return (
    <div role="tablist" className="tabs tabs-boxed mx-6 mt-2">
      <Link
        role="tab"
        href="/popular"
        onClick={() => setActiveTab("/popular")}
        className={`tab flex items-center space-x-2 ${
          activeTab === "/popular" ? "tab-active bg-blue-500 text-white" : ""
        }`}
      >
        <TrendingUpIcon />
        人気
      </Link>
      <Link
        href="/new"
        onClick={() => setActiveTab("/new")}
        className={`tab ${
          activeTab === "/new" ? "tab-active bg-blue-500 text-white" : ""
        }`}
      >
        <TrendingUpIcon />
        新着
      </Link>
    </div>
  );
}
