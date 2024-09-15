import React from "react";
import Image from "next/image";

const LoginButton = ({
	iconSrc,
	handleClick,
}: {
	iconSrc: string;
	handleClick?: () => void;
}) => {
	return (
		<button
			className="w-64 h-16 rounded-full shadow-md p-4 flex items-center justify-center"
			onClick={handleClick}
		>
			<Image
				src={iconSrc}
				alt="Discord icon"
				width={33}
				height={33}
				className="mr-2"
			/>
			<span>でログイン</span>
		</button>
	);
};

export default LoginButton;
