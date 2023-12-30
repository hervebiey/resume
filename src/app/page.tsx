import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon,} from '@/components/SocialIcons'
import profileImage from '@/images/profile.jpg'

function SocialLink({
	                    className,
	                    href,
	                    target,
	                    children,
	                    icon: Icon,
                    }: {
	className?: string
	href: string
	target: string
	icon: React.ComponentType<{ className?: string }>
	children: React.ReactNode
}) {
	return (
		<li className={clsx(className, 'flex')}>
			<Link
				href={href}
				target={target}
				className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
			>
				<Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
				<span className="ml-4">{children}</span>
			</Link>
		</li>
	)
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
			/>
		</svg>
	)
}

export const metadata: Metadata = {
	title: 'Hervé Biey',
	description:
		'I’m Hervé Biey, a Full-Stack Freelance Professional Developer with a Flair for Innovation.',
}

export default async function Home() {
	return (
		<>
			<Container className="mt-16 sm:mt-32">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<Image
								src={profileImage}
								alt=""
								sizes="(min-width: 1024px) 32rem, 20rem"
								className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
							/>
						</div>
					</div>
					<div className="lg:order-first lg:row-span-2">
						<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
							I’m Hervé, a Freelance Developer with a Flair for Digital Symphony.
						</h1>
						<div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
							<p>
								As a seasoned software developer,
								I excel in delivering state-of-the-art web and mobile solutions.
								My expertise is deeply rooted in a passion for creating efficient,
								scalable, and intuitive applications.
							</p>
							<p>
								Beyond the realms of coding, my world dances to the rhythm of music and sports.
								With a background in audio engineering,
								I have orchestrated soundscapes as a volunteer sound engineer at my church,
								blending harmonies with digital frequencies.
							</p>
							<p>
								My childhood was colored with dual fascinations:
								the enigmatic world of computers and the boundless universe of music.
								These twin passions fueled my creativity,
								guiding me in designing unique logos and digital art.
								This journey of exploration was not just about reaching new heights
								in technology but also about finding the melody in every code.
							</p>
							<p>
								Now, as the founder of Imanuwel,
								I aim to harmonize these diverse interests,
								creating a symphony of tech-driven innovations,
								artistic designs, and melodic inspirations.
								My mission is to inspire and empower the next generation,
								helping them to find <em>their own</em> rhythm in the vast universe of technology and
								art.
							</p>
						</div>
					</div>
					<div className="lg:pl-20">
						<ul role="list">
							<SocialLink
								href="https://twitter.com/hervebiey/"
								target="_blank"
								icon={TwitterIcon}>
								Follow on Twitter
							</SocialLink>
							<SocialLink
								href="https://instagram.com/hervebiey/"
								target="_blank"
								icon={InstagramIcon}
								className="mt-4"
							>
								Follow on Instagram
							</SocialLink>
							<SocialLink
								href="https://github.com/hervebiey/"
								target="_blank"
								icon={GitHubIcon}
								className="mt-4"
							>
								Follow on GitHub
							</SocialLink>
							<SocialLink
								href="https://linkedin.com/in/hervebiey/"
								target="_blank"
								icon={LinkedInIcon}
								className="mt-4"
							>
								Follow on LinkedIn
							</SocialLink>
							<SocialLink
								href="mailto:herve@imanuwel.com"
								target="_blank"
								icon={MailIcon}
								className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
							>
								herve@imanuwel.com
							</SocialLink>
						</ul>
					</div>
				</div>
			</Container>
		</>
	)
}
