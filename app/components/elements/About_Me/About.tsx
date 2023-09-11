import React from 'react';
import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Intro from '@/app/components/elements/About_Me/Intro';
import TechTable from '@/app/components/elements/About_Me/TechTable';

export default function About({ id }: PageProps) {
	return (
		<BoundWrapper className="px-5 gap-8" id={id}>
			<Intro />
			<TechTable />
		</BoundWrapper>
	);
}
