"use client";

import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginButton = ({
	iconSrc,
	provider,
}: {
	iconSrc: string;
	provider: string;
}) => {
	const handleClick = () => {
		signIn(provider, { callbackUrl: "/" }); // ログイン後にトップページにリダイレクト
	};

	return (
		<button
			className="w-64 h-16 rounded-full shadow-md p-4 flex items-center justify-center"
			onClick={handleClick}
		>
			<Image
				src={iconSrc}
				alt={`${provider} icon`}
				width={33}
				height={33}
				className="mr-2"
			/>
			<span>{provider}でログイン</span>
		</button>
	);
};

export default LoginButton;
