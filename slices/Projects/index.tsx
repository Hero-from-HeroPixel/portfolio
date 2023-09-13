import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import FeaturedProject from '@/app/components/elements/Projects/FeaturedProject';
import { prismicClient } from '@/app/lib/clients';
import { Content, FilledContentRelationshipField } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = async ({ slice }: ProjectsProps): Promise<JSX.Element> => {
	const featureProjectT = slice.primary.featured_project as FilledContentRelationshipField;
	let featuredProject;
	if (featureProjectT && featureProjectT.uid) {
		featuredProject = await prismicClient.getByUID('project', featureProjectT.uid);
	}

	return (
		<BoundWrapper
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<Heading as="h2">{slice.primary.heading}</Heading>
			<Heading as="h3">{slice.primary.feature_section_title}</Heading>
			{featuredProject && <FeaturedProject project={featuredProject} />}
		</BoundWrapper>
	);
};

export default Projects;
