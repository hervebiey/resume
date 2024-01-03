import React from 'react';
import {Tool, ToolsSection} from '@/app/resume/page';

export const skillsData = [
	{
		title: "Programming Languages",
		content: "Java, Python, JavaScript, PHP"
	},
	{
		title: "Frameworks & Libraries",
		content: "Spring (incl. Boot, Data, Security), Angular, React, Airflow, PySpark, Pandas, JUnit, Mockito, Hibernate"
	},
	{
		title: "Databases & Tools",
		content: "PostgreSQL, MS SQL Server, MySQL, Docker, Kubernetes, Jenkins, Gradle, Maven, GitHub, Bitbucket, RabbitMQ, Azure, Jira, Confluence, Qlik"
	},
	{
		title: "Miscellaneous",
		content: "Agile Methodologies, Postman, Swagger, Linux, macOS, Windows"
	}
];

type Skill = {
	title: string;
	content: string;
};

type SkillsSectionProps = {
	skills: Skill[];
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
	return (
		<ToolsSection title="Skills">
			{skills.map(skill => (
				<Tool key={skill.title} title={skill.title}>
					{skill.content}
				</Tool>
			))}
		</ToolsSection>
	);
};

export default SkillsSection;