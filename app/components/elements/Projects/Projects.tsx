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


export default function Projects({ id }: Props) {
	return (
		<section className="w-screen" id={id}>
			<Slider />
			<BoundWrapper as="div">
			<Heading className="w-11/12 mx-auto" as="h2">
				Projects
			</Heading>
			<Heading className="w-11/12 mx-auto" as="h3">
				Featured Project - Enerblu
			</Heading>
			<FeaturedProject project={featuredProject} />
			</BoundWrapper>
		</section>

