"use client";

import { useSession, signOut } from "next-auth/react";

const ProtectedPage = () => {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <p>読み込み中...</p>;
	}

	if (!session) {
		// 未認証の場合、ログインページにリダイレクト
		window.location.href = "/";
		return null;
	}

	return (
		<div>
			<h1>保護されたページ</h1>
			<p>ようこそ、{session.user?.name} さん</p>
			<button onClick={() => signOut()}>ログアウト</button>
		</div>
	);
};

export default ProtectedPage;
