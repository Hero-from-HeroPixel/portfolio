import BoundWrapper from '@/app/components/UI/BoundWrapper';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
	return (
		<BoundWrapper
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			Placeholder component for projects (variation: {slice.variation}) Slices
		</BoundWrapper>
	);
};

export default Projects;
