import React from 'react';
import Job from '@/app/components/elements/Experience/Job';
import { prismicClient } from '@/app/lib/clients';
import styles from '@/app/components/elements/Experience/experience.module.css';
import { JobDocument } from '@/prismicio-types';
import Heading from '@/app/components/UI/Heading';
import BoundWrapper from '@/app/components/UI/BoundWrapper';

type Props = {
	id?: string;
	jobs?: JobDocument<string>[] | undefined;
};

export default async function Experience({ jobs, id, ...restProps }: Props) {
	if (!jobs) {
		try {
			jobs = await prismicClient.getAllByType('job');
		} catch (error) {
			console.error('Failed to fetch Jobs');
		}
	}

	return (
		<article id={id}>
			<BoundWrapper id={id} {...restProps}>
				<div className="mt-10 mb-5 lg:mt-20 lg:mb-10">
					<Heading as="h3">Experience</Heading>
					<p className="light my-5">
						I am full stack web developer that leans toward the front-end. I have
						experience in{' '}
						<span className="text-primary">
							web development, design, web related technologies and e-commerce.{' '}
						</span>
					</p>
				</div>
			</BoundWrapper>
			<div className="flex relative">
				<div className={styles.timeline}></div>
				<div className="flex flex-col">
					{jobs && jobs.map((job) => <Job key={job.data.company} job={job} />)}
				</div>
				{!jobs && <p>Could not retrieve jobs</p>}
			</div>
		</article>
	);
}
