import React from 'react';
import {Tool, ToolsSection} from "@/app/resume/page";

export const educationData = [
	{
		institution: "VIVES, Kortrijk",
		degree: "Micro Degree",
		field: "Applied Computer Science",
		year: 2025,
		graduated: false
	}
];

type Education = {
	institution: string;
	degree: string;
	field: string;
	year: number;
	graduated: boolean;
};

type EducationSectionProps = {
	education: Education[];
};

const EducationSection: React.FC<EducationSectionProps> = ({education}) => {
	return (
		<ToolsSection title="Education">
			{education.map(edu => (
				<Tool key={edu.institution} title={edu.institution}>
					{edu.degree}: <br/>
					{edu.field} <br/>
					{edu.graduated ? edu.year : `Graduating ${edu.year}`}
				</Tool>
			))}
		</ToolsSection>
	);
};

export default EducationSection;