import {type Metadata} from 'next'

import {Providers} from '@/app/providers'
import {Layout} from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
	title: {
		template: '%s - Hervé Biey',
		default:
			'Hervé Biey - Full-Stack Freelance Professional Developer',
	},
	description:
		'I’m Hervé Biey, a Full-Stack Freelance Professional Developer with a Flair for Innovation.',
	alternates: {
		types: {
			'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
		},
	},
}

export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="h-full antialiased" suppressHydrationWarning>
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
