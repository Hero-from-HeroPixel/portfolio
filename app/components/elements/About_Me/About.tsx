import React from 'react';
import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Intro from '@/app/components/elements/About_Me/Intro';
import TechTable from '@/app/components/elements/About_Me/TechTable';
import Timeline from './Timeline';
import Heading from '../../UI/Heading';

export default function About({ id }: PageProps) {
	return (
		<article>
			<BoundWrapper className="px-5 gap-8" id={id}>
				<Intro />
				<TechTable />
				<div className="mt-10 mb-5 lg:mt-20 lg:mb-10">
					<Heading as="h3">Experience</Heading>
					<p className="light my-5">
						I am web developer with{' '}
						<strong className="text-primary">1-year full stack development</strong>{' '}
						and{' '}
						<strong className="text-primary">2 years design experience.</strong>{' '}
					</p>
				</div>
			</BoundWrapper>
			<Timeline />
		</article>
	);
}
