import ProjectsSlice from '@/app/components/elements/Projects/Projects';
import { prismicClient } from '@/app/lib/clients';
import { Content, FilledContentRelationshipField, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = async ({ slice }: ProjectsProps): Promise<JSX.Element> => {
	// const featureProjectT = slice.primary.featured_project as FilledContentRelationshipField;
	// let featuredProject;
	// if (featureProjectT && featureProjectT.uid) {
	// 	featuredProject = await prismicClient.getByUID('project', featureProjectT.uid);
	// }

	// const sideProjects = await Promise.all(
	// 	slice.items.map((item) => {
	// 		if (isFilled.contentRelationship(item.side_projects) && item.side_projects.uid) {
	// 			return prismicClient.getByUID('project', item.side_projects.uid);
	// 		}
	// 	}),
	// );

	return <ProjectsSlice id={slice.primary.section_id as string} />;
};

export default Projects;
