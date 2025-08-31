import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { trpc, getQueryClient } from "@/trpc/server";

import {
	AgentsErrorPage,
	AgentsView,
	AgentsViewLoading,
} from "@/modules/agents/ui/view/agents-view";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Page = async () => {
	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense fallback={<AgentsViewLoading />}>
				<ErrorBoundary fallback={<AgentsErrorPage />}>
					<AgentsView />
				</ErrorBoundary>
			</Suspense>
		</HydrationBoundary>
	);
};

export default Page;
