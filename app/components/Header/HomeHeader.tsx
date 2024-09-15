"use client";
import React from "react";
import { useState, useEffect } from "react";
import TagModal from "../TagModal";

const HomeHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed w-full top-0 bg-white z-50 flex h-20 border-b border-gray-200 items-center justify-end ${
        scrolled ? "bg-opacity-80" : "bg-opacity-100"
      }`}
    >
      <TagModal />
    </div>
  );
};

export default HomeHeader;
