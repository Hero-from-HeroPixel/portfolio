import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Heading from '../../UI/Heading';
import FeaturedProject from './FeaturedProjectCard';
import { prismicClient } from '@/app/lib/clients';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Content } from '@prismicio/client';

type Props = {
	id?: string;
};

export default async function ProjectsSlice({ id }: Props): Promise<JSX.Element> {
	return (
		<BoundWrapper as="div" id={id}>
			<Heading className="w-11/12 mx-auto" as="h2">
				Projects
			</Heading>
		</BoundWrapper>
	);
}
