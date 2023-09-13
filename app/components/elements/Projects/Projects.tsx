import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Heading from '../../UI/Heading';
import FeaturedProject from './FeaturedProject';

type Props = {
	id?: string;
};

export default function Projects({ id }: Props) {
	return (
		<BoundWrapper id={id}>
			<Heading as="h2">Projects</Heading>
			<Heading as="h3">Featured Project</Heading>
			<FeaturedProject />
		</BoundWrapper>
	);
}
