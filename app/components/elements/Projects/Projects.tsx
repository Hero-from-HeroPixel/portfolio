import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Heading from '../../UI/Heading';
import FeaturedProject from './FeaturedProject';
import { prismicClient } from '@/app/lib/clients';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { ProjectsProps } from '@/slices/Projects';
import { Content } from '@prismicio/client';

type Props = {
	id?: string;
	featuredProject?: Content.ProjectDocument<string>;
	mainProjects?: (Content.ProjectDocument<string> | undefined)[];
	sideProjects?: (Content.ProjectDocument<string> | undefined)[];
};

export default async function ProjectsSlice({ id }: Props): Promise<JSX.Element> {
	let featuredProject;
	let mainProjects;
	let sideProjects;
	if (!featuredProject)
		featuredProject = await prismicClient.getByUID('project', 'enerblu.co.za');

	let projects;
	if (!mainProjects || !sideProjects) projects = await prismicClient.getAllByType('project');

	if (!sideProjects && projects)
		sideProjects = projects.filter((project) => project.tags.includes('Side Project'));

	if (!mainProjects && projects)
		mainProjects = projects.filter((project) => project.tags.includes('Main Project'));

	return (
		<section className="w-screen flex flex-col gap-20" id={id}>
			<BoundWrapper as="div">
				<Heading className=" w-11/12 mx-auto" as="h2">
					Projects
				</Heading>
				<Heading className="w-11/12 mx-auto" as="h3">
					Featured Project - Enerblu
				</Heading>
			</BoundWrapper>
			{featuredProject && <FeaturedProject project={featuredProject} />}
			<BoundWrapper as="div" className="gap-40 px-5">
				<ul className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:justify-between">
					{mainProjects &&
						mainProjects.map((project) => (
							<ProjectCard project={project} key={project.id} />
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
					<ul className="flex flex-col lg:flex-row gap-16 lg:gap-20">
						{sideProjects &&
							sideProjects.map((project) => (
								<ProjectCard key={project.id} project={project} minify />
							))}
					</ul>
				</div>
			</BoundWrapper>
		</section>
	);
}
