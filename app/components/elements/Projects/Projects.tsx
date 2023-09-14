import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';

import Slider from './Slider';

import Heading from '../../UI/Heading';
import FeaturedProject from './FeaturedProject';
import { prismicClient } from '@/app/lib/clients';
import { Content } from '@prismicio/client';

type Props = {
	id?: string;
};

export default async function Projects({ id }: Props) {
	const featuredProject = await prismicClient.getByUID('project', 'enerblu.co.za');
	return (
		<section className="w-screen flex flex-col gap-10" id={id}>
			<BoundWrapper as="div">
				<Heading className=" w-11/12 mx-auto" as="h2">
					Projects
				</Heading>
				<Heading className="w-11/12 mx-auto" as="h3">
					Featured Project - Enerblu
				</Heading>
			</BoundWrapper>

			<FeaturedProject project={featuredProject} />
		</section>
	);
}
