"use client";
import React from "react";
import { useState, useEffect } from "react";
import TagModal from "../TagModal";
import HeaderLogo from "../HeaderLogo";

const HomeHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed flex mx-4 w-[calc(100%-2rem)] mt-2 top-0 z-50 h-16 border border-gray-200 items-center justify-between rounded-lg transition-all duration-300 ${
        scrolled ? "bg-white bg-opacity-95" : "bg-white bg-opacity-100"
      }`}
    >
      <HeaderLogo />
      <TagModal />
    </div>
  );
};

export default HomeHeader;
