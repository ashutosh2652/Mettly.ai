"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";

export const AgentsView = () => {
	const trpc = useTRPC();
	const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

	return <div>Agents View</div>;
};
export const AgentsViewLoading = () => {
	return (
		<LoadingState
			title='Loading Agents'
			description='This may take few seconds'
		/>
	);
};
export const AgentsErrorPage = () => {
	return (
		<ErrorState
			title='Error loading States'
			description='Something wents wrong!'
		/>
	);
};
