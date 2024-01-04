import {type Metadata} from 'next'

import {Providers} from '@/app/providers'
import {Layout} from '@/components/Layout'

import '@/styles/tailwind.css'
import Head from "next/head";

export const metadata = {
	title: {
		template: '%s - Hervé Biey',
		default: 'Hervé Biey - Full-Stack Freelance Developer',
	},
	description:
		'I’m Hervé Biey, a Full-Stack Freelance Professional Developer with a Flair for Innovation.'
}

export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="h-full antialiased" suppressHydrationWarning>
		<Head>
			<title>{metadata.title.default}</title>
			<meta name="description" content={metadata.description}/>
			<link rel="icon" href="@/app/favicon.ico"/>
		</Head>
		<body className="flex h-full bg-zinc-50 dark:bg-black">
		<Providers>
			<div className="flex w-full">
				<Layout>{children}</Layout>
			</div>
		</Providers>
		</body>
		</html>
	)
}
