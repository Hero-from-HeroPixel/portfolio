import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Heading from '../../UI/Heading';
import FeaturedProject from './FeaturedProject';
import { prismicClient } from '@/app/lib/clients';
import ProjectCard from './ProjectCard';

type Props = {
	id?: string;
};

export default async function Projects({ id }: Props) {
	const featuredProject = await prismicClient.getByUID('project', 'enerblu.co.za');
	let projects = await prismicClient.getAllByType('project');
	const mainProjects = projects.filter((project) => project.tags.includes('Main Project'));
	const sideProjects = projects.filter((project) => project.tags.includes('Side Project'));
	return (
		<section className="w-screen flex flex-col gap-10" id={id}>
			<BoundWrapper as="div">
				<Heading className=" w-11/12 mx-auto" as="h2">
					Projects
				</Heading>
				<Heading className="w-11/12 mx-auto" as="h3">
					Featured Project - Enerblu
				</Heading>
			</BoundWrapper>
			<FeaturedProject project={featuredProject} />
			<BoundWrapper as="div" className="gap-40">
				<ul className="flex flex-col lg:flex-row gap-8 lg:justify-between">
					{mainProjects.map((project) => (
						<ProjectCard project={project} key={project.id} />
					))}
				</ul>
				<div className="flex flex-col gap-10">
					<Heading as="h3">
						<span className="relative">Tutorial</span>/
						<span className="relative">Side Projects</span>{' '}
					</Heading>
					<ul className="flex flex-col lg:flex-row gap-5 lg:gap-20">
						{sideProjects.map((project) => (
							<ProjectCard key={project.id} project={project} minify />
						))}
					</ul>
				</div>
			</BoundWrapper>
		</section>
	);
}
