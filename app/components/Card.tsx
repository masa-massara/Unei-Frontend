import React from "react";

type CardProps = {
	children: React.ReactNode;
};

// カードの枠を作成するコンポーネントです。
const Card = ({ children }: CardProps) => {
	return (
		<div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md overflow-hidden break-words">
			{children}
		</div>
	);
};

export default Card;
