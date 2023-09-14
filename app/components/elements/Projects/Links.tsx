import React from 'react';
import { ExternalLink } from '../../Navigation/Links';
import { Simplify } from '@/prismicio-types';
import { Content } from '@prismicio/client';

type Props = {
	data: Simplify<Content.ProjectDocumentData>;
};

export default function Links({ data }: Props) {
	return (
		<div className="flex flex-col items-center px-5 lg:px-0 gap-6 mt-5">
			{data.project_link ? (
				<ExternalLink className="text-2xl lg:text-3xl" field={data.project_link}>
					{data.title}
				</ExternalLink>
			) : (
				<p>{data.title}</p>
			)}
			<div className="flex w-full lg:text-xl justify-between lg:gap-20 lg:justify-center">
				{data.source_code && (
					<ExternalLink className="text-primary" field={data.source_code}>
						Source Code
					</ExternalLink>
				)}
				{data.design_files && (
					<ExternalLink field={data.design_files}>Design Files</ExternalLink>
				)}
			</div>
		</div>
	);
}
