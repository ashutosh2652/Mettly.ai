import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { trpc, getQueryClient } from "@/trpc/server";

import {
	AgentsErrorPage,
	AgentsView,
	AgentsViewLoading,
} from "@/modules/agents/ui/view/agents-view";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AgentListHeader } from "@/modules/agents/ui/components/agents-list-header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (!session) redirect("/sign-in");
	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

	return (
		<>
			<AgentListHeader />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Suspense fallback={<AgentsViewLoading />}>
					<ErrorBoundary fallback={<AgentsErrorPage />}>
						<AgentsView />
					</ErrorBoundary>
				</Suspense>
			</HydrationBoundary>
		</>
	);
};

export default Page;
