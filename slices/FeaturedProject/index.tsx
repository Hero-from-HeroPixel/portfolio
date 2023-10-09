import Heading from '@/app/components/UI/Heading';
import FeaturedProjectCard from '@/app/components/elements/Projects/FeaturedProjectCard';
import { prismicClient } from '@/app/lib/clients';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FeaturedProject`.
 */
export type FeaturedProjectProps = SliceComponentProps<Content.FeaturedProjectSlice>;

/**
 * Component for "FeaturedProject" Slices.
 */
const FeaturedProject = async ({ slice }: FeaturedProjectProps): Promise<JSX.Element> => {
	let featured_project;

	if (isFilled.contentRelationship(slice.primary.project) && slice.primary.project.uid) {
		featured_project = await prismicClient.getByUID('project', slice.primary.project.uid);
	}
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<Heading className="w-11/12 lg:w-10/12 2xl:w-9/12 mx-auto" as="h3">
				Featured Project - {slice.primary.title}
			</Heading>
			{featured_project && <FeaturedProjectCard project={featured_project} />}
		</section>
	);
};

export default FeaturedProject;
