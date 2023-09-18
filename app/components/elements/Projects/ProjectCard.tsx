import { cn } from '@/app/utils/cn';
import { Content, isFilled } from '@prismicio/client';
import Image from 'next/image';
import React from 'react';
import { ExternalLink } from '../../Navigation/Links';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { prismicClient } from '@/app/lib/clients';
import Tech, { IconListT } from '../Experience/Tech';
import styles from '@/app/components/elements/Projects/projects.module.css';
import Indicator from './indicator';

type Props = {
	project: Content.ProjectDocument<string>;
	className?: string;
	minify?: boolean;
};

const components: JSXMapSerializer = {
	paragraph: ({ children }) => <p className="light sm">{children}</p>,
	strong: ({ children }) => <strong className="text-primary light sm">{children}</strong>,
};

export default async function ProjectCard({ project, className, minify }: Props) {
	let techStack;
	try {
		techStack = await Promise.all(
			project.data.tech.map(({ tech }) => {
				if (isFilled.contentRelationship(tech) && tech.uid) {
					return prismicClient.getByUID('skill', tech.uid);
				}
			}),
		);
	} catch (error) {
		console.error('Tech stack not provided');
	}

	const hasProjectLink = project.data.project_link.link_type === 'Web';
	const hasDesignFiles = project.data.design_files.link_type === 'Web';
	const hasSourceCode = project.data.source_code.link_type === 'Web';
	return (
		<li
			className={cn(
				`min-h-fit flex flex-col ${
					minify ? 'items-start gap-3' : 'items-center gap-8'
				}  w-1/4`,
				className,
			)}>
			<div className=" flex items-start gap-1">
				{project.data.type && <Indicator type={project.data.type} />}
				{hasProjectLink ? (
					<ExternalLink
						className={`text-xl text-center lg:text-2xl ${styles.ProjectLink}`}
						field={project.data.project_link}>
						{!minify && (
							<Image
								src={project.data.featured_image.url || ''}
								alt={project.data.featured_image.alt || ''}
								width={500}
								height={500}
								className="border-2 my-5 border-accent hover:shadow-glow rounded-3xl shadow-lg w-full aspect-square object-cover"
							/>
						)}
						{project.data.title}
					</ExternalLink>
				) : (
					<div className={`${styles.ProjectLink}`}>
						{!minify && (
							<Image
								src={project.data.featured_image.url || ''}
								alt={project.data.featured_image.alt || ''}
								width={500}
								height={500}
								className="border-2 my-5 border-accent hover:shadow-glow rounded-3xl shadow-lg w-full aspect-square object-cover"
							/>
						)}
						<p className="text-center">{project.data.title}</p>
					</div>
				)}
			</div>

			<div className="flex justify-between w-full lg:text-xl text-lg">
				{hasSourceCode && (
					<ExternalLink className="text-primary " field={project.data.source_code}>
						Source Code
					</ExternalLink>
				)}
				{hasDesignFiles && (
					<ExternalLink field={project.data.design_files}>Design Files</ExternalLink>
				)}
			</div>
			<PrismicRichText components={components} field={project.data.brief_description} />
			<ul className="flex flex-wrap justify-center gap-2">
				{techStack &&
					techStack.map((item) => (
						<li key={item?.data.title}>
							<Tech
								icon={item?.data.icon as IconListT}
								iconAsName={item?.data.icon_as_name}
							/>
						</li>
					))}
			</ul>
		</li>
	);
}
