import React from 'react';
import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import { ExternalLink } from '@/app/components/Navigation/Links';
import { GITHUB_LINK, RESUME_LINK } from '@/app/constants/Social';

export default function About({ id }: PageProps) {
	return (
		<BoundWrapper id={id}>
			<div className="flex w-11/12 lg:w-full justify-between">
				<Heading as="h2">About Me</Heading>
				<div className="flex flex-col lg:flex-row">
					<ExternalLink href={GITHUB_LINK}>GitHub</ExternalLink>
					<ExternalLink
						href={RESUME_LINK}
						className="after:w-0 border-2 border-primary bg-none text-primary hover:text-background hover:bg-primary transition-all duration-200 ease-out">
						Resume
					</ExternalLink>
				</div>
			</div>
			<p>
				I have experience with modern web development languages, frameworks as well as
				integrating numerous business components for example commerce and headless CMS
				systems. I follow SOLID principles & implement version control in all of my
				projects.
			</p>
		</BoundWrapper>
	);
}
