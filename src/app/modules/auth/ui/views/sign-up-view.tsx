"use client";
import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { OctagonAlertIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z
	.object({
		name: z.string().min(1, { message: "Name is required" }),
		email: z.string().email(),
		password: z.string().min(1, { message: "Password is required!" }),
		confirmPassword: z
			.string()
			.min(1, { message: "Password is required!" }),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: "Password donnot match",
		path: ["confirmPassword"],
	});

export const SignUpView = () => {
	const [pending, setpending] = useState<boolean>(false);
	const [error, seterror] = useState<string | null>(null);
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		seterror(null);
		setpending(true);
		authClient.signUp.email(
			{
				name: data.name,
				email: data.email,
				password: data.password,
				callbackURL: "/login",
			},
			{
				onSuccess: () => {
					setpending(false);
					router.push("/");
				},
				onError: ({ error }) => {
					setpending(false);
					seterror(error.message);
				},
			}
		);
	};
	const onSocial = (provider: "github" | "google") => {
		seterror(null);
		setpending(true);
		authClient.signIn.social(
			{
				provider,
				callbackURL: "/",
			},
			{
				onSuccess: () => {
					setpending(false);
				},
				onError: ({ error }) => {
					setpending(false);
					seterror(error.message);
				},
			}
		);
	};
	return (
		<div className='flex flex-col gap-6'>
			<Card className='overflow-hidden p-0'>
				<CardContent className='grid p-0 md:grid-cols-2'>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='p-6 md:p-8'
						>
							<div className='flex flex-col gap-6'>
								<div className='flex flex-col items-center text-center'>
									<h1 className='text-2xl font-bold'>
										Let&apos;s get Started
									</h1>
									<p className='text-muted-foreground text-balance'>
										Create your Account
									</p>
								</div>
								<div className='grid gap-3'>
									<FormField
										control={form.control}
										name='name'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Name</FormLabel>
												<FormControl>
													<Input
														type='name'
														placeholder='John Doe'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className='grid gap-3'>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														type='email'
														placeholder='m@gmail.com'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className='grid gap-3'>
									<FormField
										control={form.control}
										name='password'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input
														type='password'
														placeholder='*******'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className='grid gap-3'>
									<FormField
										control={form.control}
										name='confirmPassword'
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Confirm Password
												</FormLabel>
												<FormControl>
													<Input
														type='password'
														placeholder='*******'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								{!!error && (
									<Alert className='bg-destructive/10 border-none'>
										<OctagonAlertIcon className='h-4 w-4 !text-destructive' />
										<AlertTitle>{error}</AlertTitle>
									</Alert>
								)}
								<Button
									type='submit'
									className='w-full'
									disabled={pending}
								>
									Sign In
								</Button>

								<div className="relative my-4 text-center text-sm after:absolute after:inset-x-0 after:top-1/2 after:h-px after:bg-border after:content-['']">
									<span className='relative z-10 bg-card px-2 text-muted-foreground'>
										Or Continue With
									</span>
								</div>

								<div className='grid grid-cols-2 gap-4'>
									<Button
										variant={"outline"}
										type='button'
										className='w-full'
										disabled={pending}
										onClick={() => onSocial("google")}
									>
										<FaGoogle />
									</Button>
									<Button
										variant={"outline"}
										type='button'
										className='w-full'
										disabled={pending}
										onClick={() => onSocial("github")}
									>
										<FaGithub />
									</Button>
								</div>
								<div className='text-center text-sm'>
									Already have an account?{" "}
									<Link
										href={"/sign-in"}
										className='underline underline-offset-4'
									>
										SignIn
									</Link>
								</div>
							</div>
						</form>
					</Form>
					<div className='bg-radial from-sidebar-accent to-sidebar relative hidden md:flex flex-col gap-y-4 items-center justify-center'>
						<img
							src='/mettly.ai.svg'
							alt='mettly.ai'
							className='h-[92px] w-[92px] '
						/>
						<p className='text-2xl font-semibold text-white'>
							METTLY.ai
						</p>
					</div>
				</CardContent>
			</Card>
			<div
				className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline
                            *:[a]:underline-offset-4'
			>
				By clicking continue, you agree to our{" "}
				<a href='#'>Terms of Service</a>and{" "}
				<a href='#'>Privacy Policy</a>
			</div>
		</div>
	);
};
