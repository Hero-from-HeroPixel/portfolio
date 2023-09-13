import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
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
		<BoundWrapper id={id}>
			<Heading className="w-11/12 mx-auto" as="h2">
				Projects
			</Heading>
			<Heading className="w-11/12 mx-auto" as="h3">
				Featured Project - Enerblu
			</Heading>
			<FeaturedProject project={featuredProject} />
		</BoundWrapper>
	);
}
