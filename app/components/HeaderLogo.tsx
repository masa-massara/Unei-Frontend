import React from "react";

const HeaderLogo = () => {
  const iconSrc =
    "https://media.connpass.com/thumbs/65/ab/65ab2b7f912660bbc6f1af755788c43c.png";
  const name = "ロゴ";
  return (
    <a href="/" className="flex items-center space-x-2 ml-4">
      <img
        src={iconSrc}
        alt="ロゴ"
        width={32}
        height={32}
        className="rounded-lg"
      />
      <span className="text-xl font-bold">{name}</span>
    </a>
  );
};

export default HeaderLogo;
