"use client";

import { ErrorState } from "@/components/error-state";

function ErrorPage() {
	return (
		<ErrorState
			title='Error loading States'
			description='Something wents wrong!'
		/>
	);
}

export default ErrorPage;
