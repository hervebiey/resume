import {type Metadata} from 'next'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'
import SkillsSection, {skillsData} from './SkillsSection';
import EducationSection, {educationData} from "@/app/resume/EducationSection";
import LanguageSection, {languageData} from "@/app/resume/LanguagesSection";
import ExperienceSection, {experienceData} from "@/app/resume/ExperienceSection";
import CertificationsSection, {certificationsData} from "@/app/resume/CertificationsSection";

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

export const metadata: Metadata = {
	title: 'Resume',
	description: 'Explore My Professional Tapestry.',
}

export default async function Resume() {
	return (
		<SimpleLayout
			title="Explore My Professional Tapestry"
			intro="Delve into the details of my career journey, where each role and project has been a unique thread weaving together a rich tapestry of experience. From the intricacies of full-stack development to the creativity of audio engineering and digital design, discover the skills and stories that define my professional path. This page is your gateway to understanding how my diverse experiences converge into a singular, dynamic career."
		>
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/3 space-y-20">
					<CertificationsSection certifications={certificationsData}/>
					<SkillsSection skills={skillsData}/>
					<EducationSection education={educationData}/>
					<LanguageSection languages={languageData}/>
				</div>
				<div className="md:w-2/3 max-w-3xl md:pl-12 space-y-16">
					{ExperienceSection(experienceData)}
				</div>
			</div>
		</SimpleLayout>
	)
}