import React from 'react';
import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '../../UI/Heading';
import EduTable from './EduTable';

type Props = {
	id?: string;
};

export default async function EducationTable({ id }: Props) {
	return (
		<BoundWrapper id={id}>
			<Heading className="w-10/12 lg:w-full mx-auto" as="h2">
				Education
			</Heading>
			<EduTable />
		</BoundWrapper>
	);
}
