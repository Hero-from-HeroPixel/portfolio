import React from 'react';
import { JobDocument } from '@/prismicio-types';
import { isFilled } from '@prismicio/client';
import { prismicClient } from '@/app/lib/clients';
import Card from './Card';
import TimeStamp from './TimeStamp';

type Props = {
	className?: string;
	job: JobDocument<string>;
};

export default async function Job({ className, job }: Props) {
	const techStack = await Promise.all(
		job.data.tech_stack.map(({ tech }) => {
			if (isFilled.contentRelationship(tech) && tech.uid) {
				return prismicClient.getByUID('skill', tech.uid);
			}
		}),
	);
	return (
		<div className="flex gap-10 lg:w-11/12 2xl:w-10/12 mx-auto mb-10">
			<TimeStamp
				startDate={job.data.start_date as string}
				endDate={job.data.end_date as string}
			/>
			<Card className={className} job={job} techStack={techStack} />
		</div>
	);
}
