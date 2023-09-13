import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import FeaturedProject from '@/app/components/elements/Projects/FeaturedProject';
import { prismicClient } from '@/app/lib/clients';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = async ({ slice }: ProjectsProps): Promise<JSX.Element> => {
	const featuredProject = await Promise.resolve(slice.primary.featured_project);

	return (
		<BoundWrapper
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<Heading as="h2">{slice.primary.heading}</Heading>
			<Heading as="h3">{slice.primary.feature_section_title}</Heading>
			<FeaturedProject />
		</BoundWrapper>
	);
};

export default Projects;
