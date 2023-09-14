import { Content, isFilled } from '@prismicio/client';
import React from 'react';
import Links from './Links';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { prismicClient } from '@/app/lib/clients';
import Tech, { IconListT } from '../Experience/Tech';
import Slider from './Slider';
import imgs from '@/app/assets/demoImg';
import SliderItem from './SliderItem';

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
		<>
			<Slider />
			<div className="flex flex-col px-5 gap-4 lg:w-10/12 2xl:w-9/12 mx-auto text-center">
				<Links data={data} />
				<PrismicRichText components={components} field={data.brief_description} />
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
			</div>
		</>
	);
}
