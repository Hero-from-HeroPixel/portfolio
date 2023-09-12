import React from 'react';
import Job from './Job';
import { prismicClient } from '@/app/lib/clients';
import styles from '@/app/components/elements/About_Me/timeline.module.css';

type Props = {};

export default async function Timeline({}: Props) {
	let jobs;
	try {
		jobs = await prismicClient.getAllByType('job');
	} catch (error) {
		console.error('Failed to fetch Jobs');
	}
	return (
		<div className="flex relative">
			<div className={styles.timeline}></div>
			<div>{jobs && jobs.map((job) => <Job key={job.data.company} job={job} />)}</div>
			{!jobs && <p>Could not retrieve jobs</p>}
		</div>
	);
}
