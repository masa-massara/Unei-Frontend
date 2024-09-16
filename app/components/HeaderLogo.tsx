import React from "react";

const HeaderLogo = () => {
  const iconSrc =
    "https://media.connpass.com/thumbs/65/ab/65ab2b7f912660bbc6f1af755788c43c.png";
  const name = "Tech.SummerCamp";
  return (
    <a href="/home" className="flex items-center space-x-2 ml-4">
      <img
        src={iconSrc}
        alt="logo"
        width={32}
        height={32}
        className="rounded-lg"
      />
      <span className="text-base font-bold">{name}</span>
    </a>
  );
};

export default HeaderLogo;
