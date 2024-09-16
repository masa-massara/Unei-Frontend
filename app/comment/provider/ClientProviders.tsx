"use client";

import { SessionProvider } from "next-auth/react";
import { GroupEventProvider } from "../../contexts/GroupEventContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<GroupEventProvider>{children}</GroupEventProvider>
		</SessionProvider>
	);
}
