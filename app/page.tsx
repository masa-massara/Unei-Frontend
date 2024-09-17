"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Card from "./components/Card";
import Tags from "./components/Tag/Tags";
import LoginButton from "./components/button/LoginButton";
import Stamps from "./components/Stamps";
import RouteHeader from "./components/Header/RouteHeader";
import { ClientProviders } from "./comment/provider/ClientProviders";

const PageContent = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "authenticated") {
			router.push("/home"); // 認証成功で /home へリダイレクト
		}
	}, [status, router]);

	return (
		<>
			<RouteHeader title="Unei" />
			<div className="mt-16 w-full flex justify-center">
				<Card>
					<Tags tags={[{ name: "ログイン", color: "#F5BDBD" }]} />
					<h1 className="font-bold text-2xl pt-6">Uneiへようこそ</h1>
					<div className="w-full flex justify-center flex-col items-center gap-6 my-6">
						<LoginButton
							iconSrc="/images/discordIcon.svg"
							provider="discord"
						/>
					</div>
					<Stamps
						id=""
						reactions={[
							{
								members: [{ name: "" }],
								icon_path: "/images/1f389.svg",
							},
							{
								members: [{ name: "" }],
								icon_path: "/images/1f38a.svg",
							},
							{
								members: [{ name: "" }],
								icon_path: "/images/banzai.svg",
							},
						]}
					/>
				</Card>
			</div>
		</>
	);
};

const Page = () => {
	return (
		<ClientProviders>
			<PageContent />
		</ClientProviders>
	);
};

export default Page;
