import React from 'react';
import { ExternalLink } from '../../Navigation/ExternalLink';
import { Simplify } from '@/prismicio-types';
import { Content } from '@prismicio/client';

type Props = {
	data: Simplify<Content.ProjectDocumentData>;
};

export default function Links({ data }: Props) {
	const hasProjectLink = data.project_link.link_type === 'Web';
	const hasDesignFiles = data.design_files.link_type === 'Web';
	const hasSourceCode = data.source_code.link_type === 'Web';
	return (
		<div className="flex flex-col items-center px-5 lg:px-0 gap-6 mt-5">
			{hasProjectLink ? (
				<ExternalLink className="text-2xl lg:text-3xl" field={data.project_link}>
					{data.title}
				</ExternalLink>
			) : (
				<p>{data.title}</p>
			)}
			<div className="flex w-full lg:text-xl justify-between lg:gap-20 lg:justify-center">
				{hasSourceCode && (
					<ExternalLink className="text-primary" field={data.source_code}>
						Source Code
					</ExternalLink>
				)}
				{hasDesignFiles && (
					<ExternalLink field={data.design_files}>Design Files</ExternalLink>
				)}
			</div>
		</div>
	);
}
