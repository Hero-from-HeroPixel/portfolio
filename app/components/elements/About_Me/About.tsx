import React from 'react';
import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import { ExternalLink } from '@/app/components/Navigation/Links';
import { GITHUB_LINK, RESUME_LINK } from '@/app/constants/Social';

export default function About({ id }: PageProps) {
	return (
		<BoundWrapper className="px-5 gap-8 lg:gap-0" id={id}>
			<div className="flex w-11/12 lg:w-full justify-between items-center">
				<Heading as="h2">About Me</Heading>
				<div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
					<ExternalLink className="btn" href={GITHUB_LINK}>
						GitHub
					</ExternalLink>
					<ExternalLink
						href={RESUME_LINK}
						className="btn border-2  px-3 lg:px-4 lg:py-2 py-1 rounded-full border-primary bg-none text-primary hover:text-background hover:bg-primary hover:after:!w-0 hover:!text-opacity-100 transition-all duration-200 ease-out">
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
