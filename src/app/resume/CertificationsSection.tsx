import React from 'react';
import {Tool, ToolsSection} from "@/app/resume/page";

export const certificationsData = [
	{
		name: 'Oracle Certified Professional',
		detail: 'Java SE 11 Developer (1Z0-819)',
		issuer: 'Oracle University',
		month: '01/2024',
		obtained: false
	}
];

type Certifications = {
	name: string;
	detail: string;
	issuer: string;
	month: string;
	obtained: boolean;
};

type CertificationsSectionProps = {
	certifications: Certifications[];
};

const CertificationsSection: React.FC<CertificationsSectionProps> = ({certifications}) => {
	return (
		<ToolsSection title="Certified">
			{certifications.map(certificate => (
				<Tool
					key={certificate.name}
					title={certificate.name}
				>
					{certificate.detail} <br/>
					{certificate.issuer} <br/>
					{certificate.obtained ? certificate.month : `Obtaining ${certificate.month}`}
				</Tool>
			))}
		</ToolsSection>
	);
};

export default CertificationsSection;