import React from 'react';
import { JobDocument } from '@/prismicio-types';
import { isFilled } from '@prismicio/client';
import { prismicClient } from '@/app/lib/clients';
import Card from './Card';

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
	return <Card className={className} job={job} techStack={techStack} />;
}
