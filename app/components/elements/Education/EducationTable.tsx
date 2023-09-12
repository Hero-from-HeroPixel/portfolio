import React from 'react';
import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '../../UI/Heading';
import EduTable from './EduTable';
import { prismicClient } from '@/app/lib/clients';

type Props = {
	id?: string;
};

export default async function EducationTable({ id }: Props) {
	let educationEntries;

	try {
		educationEntries = await prismicClient.getAllByType('education_entry');
	} catch (error) {
		console.error('Failed to retrieve entries');
	}
	return (
		<BoundWrapper id={id}>
			<Heading className="w-10/12 lg:w-full mx-auto" as="h2">
				Education
			</Heading>
			{educationEntries && <EduTable entries={educationEntries} />}
			{!educationEntries && <p>Failed to retrieve education entries</p>}
		</BoundWrapper>
	);
}
