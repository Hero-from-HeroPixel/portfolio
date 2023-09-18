import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import FeaturedProject from '@/app/components/elements/Projects/FeaturedProject';
import ProjectCard from '@/app/components/elements/Projects/ProjectCard';
import { prismicClient } from '@/app/lib/clients';
import { faCodeBranch, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
	const featureProjectT = slice.primary.featured_project as FilledContentRelationshipField;
	let featuredProject;
	if (featureProjectT && featureProjectT.uid) {
		featuredProject = await prismicClient.getByUID('project', featureProjectT.uid);
	}

	const mainProjects = await Promise.all(
		slice.items.map((item) => {
			if (isFilled.contentRelationship(item.projects) && item.projects.uid) {
				return prismicClient.getByUID('project', item.projects.uid);
			}
		}),
	);

	const sideProjects = await Promise.all(
		slice.items.map((item) => {
			if (isFilled.contentRelationship(item.side_projects) && item.side_projects.uid) {
				return prismicClient.getByUID('project', item.side_projects.uid);
			}
		}),
	);

	return (
		<section
			className="w-screen flex flex-col gap-10"
			id={slice.primary.section_id as string}>
			<BoundWrapper as="div">
				<Heading className=" w-11/12 mx-auto" as="h2">
					Projects
				</Heading>
				<Heading className="w-11/12 mx-auto" as="h3">
					Featured Project - Enerblu
				</Heading>
			</BoundWrapper>
			{featuredProject && <FeaturedProject project={featuredProject} />}
			<BoundWrapper as="div" className="gap-40">
				<ul className="flex flex-col lg:flex-row gap-8 lg:justify-between">
					{mainProjects.map((project) => (
						<React.Fragment key={project?.id}>
							{project && <ProjectCard project={project} />}
						</React.Fragment>
					))}
				</ul>
				<div className="flex flex-col gap-10">
					<Heading className="flex items-center" as="h3">
						<span className="flex items-start gap-1">
							Tutorial
							<FontAwesomeIcon
								className="w-4 h-fit text-primary"
								icon={faGraduationCap}
							/>
						</span>
						/
						<span className="flex items-start gap-1">
							Side Projects
							<FontAwesomeIcon
								className="w-4 h-fit text-accent"
								icon={faCodeBranch}
							/>
						</span>{' '}
					</Heading>
					<ul className="flex flex-col lg:flex-row gap-5 lg:gap-20">
						{sideProjects.map((project) => (
							<React.Fragment key={project?.id}>
								{project && <ProjectCard project={project} minify />}
							</React.Fragment>
						))}
					</ul>
				</div>
			</BoundWrapper>
		</section>
	);
};

export default Projects;
