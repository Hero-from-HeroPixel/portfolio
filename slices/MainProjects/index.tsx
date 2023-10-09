import BoundWrapper from '@/app/components/UI/BoundWrapper';
import ProjectCard from '@/app/components/elements/Projects/ProjectCard';
import { prismicClient } from '@/app/lib/clients';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import React from 'react';

/**
 * Props for `MainProjects`.
 */
export type MainProjectsProps = SliceComponentProps<Content.MainProjectsSlice>;

/**
 * Component for "MainProjects" Slices.
 */
const MainProjects = async ({ slice }: MainProjectsProps): Promise<JSX.Element> => {
	const mainProjects = await Promise.all(
		slice.items.map((item) => {
			if (isFilled.contentRelationship(item.projects) && item.projects.uid) {
				return prismicClient.getByUID('project', item.projects.uid);
			}
		}),
	);
	return (
		<BoundWrapper
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			as="div"
			className="gap-40 px-5">
			<ul className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:justify-between">
				{mainProjects &&
					mainProjects.map((project) => (
						<React.Fragment key={project?.id}>
							{project && <ProjectCard project={project} key={project.id} />}
						</React.Fragment>
					))}
			</ul>
			{/* <div className="flex flex-col gap-10">
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
				</div> */}
		</BoundWrapper>
	);
};

export default MainProjects;
