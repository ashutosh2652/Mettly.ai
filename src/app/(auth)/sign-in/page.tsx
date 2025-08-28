import { SignInView } from '@/app/modules/auth/ui/views/sign-in-view';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

async function SignIn() {
	const session = await auth.api.getSession({ headers: await headers() });

	if (!!session) redirect('/');
	return <SignInView />;
}

export default SignIn;
