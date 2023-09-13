import React from 'react';
import Job from './Job';
import { prismicClient } from '@/app/lib/clients';
import styles from '@/app/components/elements/About_Me/timeline.module.css';
import { JobDocument } from '@/prismicio-types';

type Props = {
	jobs?: JobDocument<string>[] | undefined;
};

export default async function Timeline({ jobs }: Props) {
	if (!jobs) {
		try {
			jobs = await prismicClient.getAllByType('job');
		} catch (error) {
			console.error('Failed to fetch Jobs');
		}
	}

	return (
		<div className="flex relative">
			<div className={styles.timeline}></div>
			<div className="flex flex-col-reverse">
				{jobs && jobs.map((job) => <Job key={job.data.company} job={job} />)}
			</div>
			{!jobs && <p>Could not retrieve jobs</p>}
		</div>
	);
}
