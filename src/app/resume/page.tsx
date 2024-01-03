import {type Metadata} from 'next'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'
import {type ArticleWithSlug, getAllArticles} from '@/lib/articles'
import {formatDate} from '@/lib/formatDate'
import SkillsSection, {skillsData} from './SkillsSection';
import EducationSection, {educationData} from "@/app/resume/EducationSection";
import LanguageSection, {languageData} from "@/app/resume/LanguagesSection";

export function ToolsSection({
	                             children,
	                             ...props
                             }: React.ComponentPropsWithoutRef<typeof Section>) {
	return (
		<Section {...props}>
			<ul role="list" className="space-y-5">
				{children}
			</ul>
		</Section>
	)
}

export function Tool({
	                     title,
	                     href,
	                     children,
                     }: {
	title: string
	href?: string
	children: React.ReactNode
}) {
	return (
		<Card as="li">
			<Card.Title as="h3" href={href}>
				{title}
			</Card.Title>
			<Card.Description>{children}</Card.Description>
		</Card>
	)
}

function Article({article}: { article: ArticleWithSlug }) {
	return (
		<article className="md:grid md:grid-cols-4 md:items-baseline">
			<Card className="md:col-span-3">
				<Card.Title href={`/resume/${article.slug}`}>
					{article.title}
				</Card.Title>
				<Card.Eyebrow
					as="time"
					dateTime={article.date}
					className="md:hidden"
					decorate
				>
					{formatDate(article.date)}
				</Card.Eyebrow>
				<Card.Description>{article.description}</Card.Description>
				<Card.Cta>Read article</Card.Cta>
			</Card>
			<Card.Eyebrow
				as="time"
				dateTime={article.date}
				className="mt-1 hidden md:block"
			>
				{formatDate(article.date)}
			</Card.Eyebrow>
		</article>
	)
}

export const metadata: Metadata = {
	title: 'Resume',
	description:
		'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function Resume() {
	let articles = await getAllArticles()
	
	const certifications = [{name: 'Certification 1', year: 2020}, /*...*/];
	const experience = [{role: 'Role Title', company: 'Company Name', year: '2020-2022'}, /*...*/];
	const projects = [{title: 'Project Title', description: 'Project Description'}, /*...*/];
	
	return (
		<SimpleLayout
			title="Writing on software design, company building, and the aerospace industry."
			intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
		>
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/3 space-y-14">
					<SkillsSection skills={skillsData}/>
					<EducationSection education={educationData}/>
					<LanguageSection languages={languageData}/>
				</div>
				<div
					className="md:w-2/3 max-w-3xl md:pl-12 space-y-16">
					{/* Certifications */}
					{/* Experience */}
					{/* Projects */}
					{articles.map((article) => (
						<Article key={article.slug} article={article}/>
					))}
				</div>
			</div>
		</SimpleLayout>
	)
}
