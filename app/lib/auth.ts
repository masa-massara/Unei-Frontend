import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: NextAuthOptions = {
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	// 必要に応じて、コールバックやセッションの設定を追加します
};
