import React from 'react';
import {Card} from "@/components/Card";

export const experienceData = [
	{
		role: 'Java & Angular Full-Stack Developer',
		company: 'Cegeka, Leuven',
		period: '03/2023 - Present',
		description: 'Actively involved in developing and maintaining a web application for VUTG, improving case management functionalities.',
		tasks: [
			'Utilized a robust stack including Java (Spring), JavaScript (Angular), Axon Framework, Docker, and Kubernetes.',
			'Focused on code quality and efficiency, leveraging SonarQube and Jenkins for continuous integration and delivery.'
		]
	},
	{
		role: 'Python Automation Developer & Analyst',
		company: 'APB (Algemene Pharmaceutische Bond), Brussels',
		period: '10/2021 - 07/2022',
		description: 'Developed Airflow applications for automating pharmaceutical data migration, analyzed using Qlik Sense.',
		tasks: [
			'Skilled in Python frameworks (Airflow, PySpark, Pandas) and familiar with front-end technologies (HTML, CSS).',
			'Managed data in various formats (XML, JSON, CSV) and worked with PostgreSQL and MS SQL Server.'
		]
	},
	{
		role: 'API Integration Engineer & Solutions Architect',
		company: 'Qlik Belgium, Ghent',
		period: '03/2021 - 10/2021',
		description: 'Specialized in API integration using PHP, REST, SOAP, and GraphQL for the Blendr.io platform (now Qlik Application Automation).',
		tasks: [
			'Implemented API authentication for platforms like Google Cloud and Salesforce.',
			'Experienced in using Postman and Swagger and managing workflows in Jira and Confluence.'
		]
	},
	{
		role: 'Backend Web Developer (Part-Time)',
		company: 'IT Belconet, Wetteren',
		period: '07/2014 - 02/2021',
		description: 'Developed custom websites and web applications using WordPress, Drupal, and later (since 2017) Java and React.',
		tasks: [
			'Proficient in Java Spring ecosystem, JavaScript frameworks, and database management (MySQL).',
			'Employed tools such as Maven, Docker, Kubernetes, and Azure DevOps for efficient development and deployment.',
			'During this period I worked part-time in order to focus on my freelance client projects.'
		]
	},
	{
		role: 'Freelance Client Projects',
		company: 'Imanuwel, Ghent',
		period: '01/2012 - Present',
		description: 'Completed diverse freelance projects, including web development, design, and audio engineering.',
		tasks: [
			'Expertise in JavaScript (Node.js, Vue.js, React) and Java Spring frameworks, focusing on modern web technologies and cloud services (AWS, Azure).',
			'Utilized tools like GitHub Actions, Terraform, and Kubernetes for scalable and efficient project management.'
		]
	}
];

type ExperienceEntry = {
	role: string;
	company: string;
	period: string;
	description: string;
	tasks: string[];
};

function ExperienceCard({experience}: { experience: ExperienceEntry }) {
	return (
		<article className="md:grid md:grid-cols-4 md:items-baseline">
			<Card className="md:col-span-3">
				<h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
					{experience.role}
				</h1>
				<Card.Title>
					{experience.company}
				</Card.Title>
				<p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
					{experience.description}
				</p>
				<Card.Description>
					<ul>
						{experience.tasks.map((task, index) => (
							<li key={index}>{task}</li>
						))}
					</ul>
				</Card.Description>
			</Card>
			<Card.Eyebrow className="mt-1 hidden md:block">
				{experience.period}
			</Card.Eyebrow>
		</article>
	)
}

const ExperienceSection = (experience: ExperienceEntry[]) => experience.map(exp => (
	<ExperienceCard key={`${exp.role}-${exp.company}`} experience={exp}/>
));

export default ExperienceSection;