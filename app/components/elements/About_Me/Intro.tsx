import React from 'react';
import Heading from '@/app/components/UI/Heading';
import { ExternalLink } from '@/app/components/Navigation/Links';
import { GITHUB_LINK, RESUME_LINK } from '@/app/constants/Social';

type Props = {};

export default function Intro({}: Props) {
	return (
		<div className="flex flex-col gap-8 lg:gap-0">
			<div className="flex w-11/12 lg:w-full justify-between items-center">
				<Heading as="h2">About Me</Heading>
				<div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 lg:gap-8 -mr-6 lg:mr-0">
					<ExternalLink className="btn" href={GITHUB_LINK}>
						GitHub
					</ExternalLink>
					<ExternalLink
						href={RESUME_LINK}
						className="btn border-2 px-3 lg:px-4 lg:py-2 py-0 rounded-full border-primary bg-none text-primary hover:text-background hover:bg-primary hover:after:!w-0 hover:!text-opacity-100 transition-all duration-200 ease-out">
						Curriculum vitae
					</ExternalLink>
				</div>
			</div>
			<p>
				I have experience with modern web development languages, frameworks as well as
				integrating numerous business components for example commerce and headless CMS
				systems. I follow SOLID principles & implement version control in all of my
				projects.
			</p>
		</div>
	);
}
