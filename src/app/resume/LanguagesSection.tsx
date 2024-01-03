import React from 'react';
import {Tool, ToolsSection} from '@/app/resume/page';

export const languageData = [
	{
		title: 'English',
		proficiency: 'Native Proficiency'
	},
	{
		title: 'Dutch',
		proficiency: 'Native Proficiency'
	},
	{
		title: 'French',
		proficiency: 'Native Proficiency'
	}
];

type Language = {
	title: string;
	proficiency: string;
};

type LanguageSectionProps = {
	languages: Language[];
};

const LanguageSection: React.FC<LanguageSectionProps> = ({languages}) => {
	return (
		<ToolsSection title="Language">
			{languages.map(language => (
				<Tool key={language.title} title={language.title}>
					{language.proficiency}
				</Tool>
			))}
		</ToolsSection>
	);
};

export default LanguageSection;