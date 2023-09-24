import { Content, isFilled } from '@prismicio/client';
import React from 'react';
import Links from './Links';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { prismicClient } from '@/app/lib/clients';
import Tech, { IconListT } from '../Experience/Tech';
import Slider from './Slider';
import Image from 'next/image';

const components: JSXMapSerializer = {
	paragraph: ({ children }) => <p className="sm light">{children}</p>,
	strong: ({ children }) => <strong className="text-primary light">{children}</strong>,
};

type Props = {
	project: Content.ProjectDocument<string>;
};

export default async function FeaturedProject({ project }: Props) {
	const { data } = project;
	let techStack;
	try {
		techStack = await Promise.all(
			data.tech.map(({ tech }) => {
				if (isFilled.contentRelationship(tech) && tech.uid) {
					return prismicClient.getByUID('skill', tech.uid);
				}
			}),
		);
	} catch (error) {
		console.error('Tech stack not provided');
	}

	return (
		<div
			className="border-t-2 border-b-2 border-accent rounded-3xl lg:border-none py-10 lg:py-0"
			id={project.data.section_id as string}>
			<Slider
				show={{ desktop: 3.25, mobile: 1.15, tablet: 2.2 }}
				appearance={{ container: 'lg:my-10' }}>
				{data.images.map(({ showcase }, i) => (
					<Image
						draggable={false}
						width={1280}
						height={1080}
						className="w-full h-60 lg:h-80 rounded-2xl border-2 shadow-lg shadow-background my-5 border-glass object-cover"
						key={i}
						src={showcase.url || ''}
						alt={showcase.alt || ''}
					/>

					// <div
					// 	className="h-96 mx-auto w-full bg-white border-2 border-black flex justify-center items-center text-6xl text-black rounded-2xl "
					// 	key={i}>
					// 	{i}
					// </div>
				))}
			</Slider>
			<div className="flex flex-col px-5 gap-4 lg:w-10/12 2xl:w-9/12 mx-auto lg:text-center">
				<Links data={data} />
				<PrismicRichText components={components} field={data.brief_description} />
				<ul className="flex flex-wrap lg:justify-center gap-2">
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
			</div>
		</div>
	);
}
