"use client";

import { useSession, signOut } from "next-auth/react";

const UserProfile = () => {
	const { data: session } = useSession();

	if (session) {
		return (
			<div>
				<p>ログイン中: {session.user?.name}</p>
				<button onClick={() => signOut()}>ログアウト</button>
			</div>
		);
	}

	return <p>ログインしていません</p>;
};

export default UserProfile;
