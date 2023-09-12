import React from 'react';
import Job from './Job';
import { prismicClient } from '@/app/lib/clients';

type Props = {};

export default async function Timeline({}: Props) {
	let jobs;
	try {
		jobs = await prismicClient.getAllByType('job');
	} catch (error) {
		console.error('Failed to fetch Jobs');
	}
	return (
		<div className="flex gap-10">
			<div className="h-full bg-accent w-3 rounded-full"></div>
			{jobs && jobs.map((job) => <Job key={job.data.company} job={job} />)}
			{!jobs && <p>Could not retrieve jobs</p>}
		</div>
	);
}
