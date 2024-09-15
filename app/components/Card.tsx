import React from "react";

type CardProps = {
	children: React.ReactNode;
};

// カードの枠を作成するコンポーネントです。
const Card = ({ children }: CardProps) => {
	return (
		<div className="w-[360px] p-4 bg-white rounded-lg shadow-md overflow-hidden break-words border ">
			{children}
		</div>
	);
};

export default Card;
