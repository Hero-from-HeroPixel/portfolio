import React from 'react';
import Heading from '@/app/components/UI/Heading';
import { ExternalLink } from '@/app/components/Navigation/Links';
import { KeyTextField, LinkField, RichTextField } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

type Props = {
	heading?: string | KeyTextField;
	github?: string | LinkField;
	cv?: string | LinkField;
	introduction?: string | RichTextField;
};

export default function Intro({ heading, github, cv, introduction }: Props) {
	return (
		<div className="flex flex-col gap-8 lg:gap-0">
			<div className="flex w-11/12 lg:w-full justify-between items-center">
				<Heading as="h2">{heading || 'About Me'}</Heading>
				<div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 lg:gap-8 -mr-6 lg:mr-0">
					<ExternalLink
						className="btn"
						field={typeof github !== 'string' ? github : undefined}
						href={typeof github === 'string' ? github : undefined}>
						GitHub
					</ExternalLink>
					<ExternalLink
						field={typeof cv !== 'string' ? cv : undefined}
						href={typeof cv === 'string' ? cv : undefined}
						className="btn border-2 px-3 lg:px-4 lg:py-2 py-0 rounded-full border-primary bg-none text-primary hover:text-background hover:bg-primary hover:after:!w-0 hover:!text-opacity-100 transition-all duration-200 ease-out">
						Curriculum vitae
					</ExternalLink>
				</div>
			</div>
			{typeof introduction === 'string' ? (
				<p>{introduction}</p>
			) : (
				<PrismicRichText field={introduction} />
			)}
		</div>
	);
}
