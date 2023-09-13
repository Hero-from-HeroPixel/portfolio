import React from 'react';
import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Intro from '@/app/components/elements/About_Me/Intro';
import TechTable from '@/app/components/elements/About_Me/TechTable';
import Heading from '@/app/components/UI/Heading';
import { AboutProps } from '@/slices/About';
import { Content, isFilled } from '@prismicio/client';
import { prismicClient } from '@/app/lib/clients';

interface AboutPageProps extends PageProps {
	slice?: Content.JobSlice;
}

export default async function About({ id, slice }: AboutPageProps) {
	return (
		<BoundWrapper
			className="px-5 gap-8"
			id={id}
			data-slice-type={slice?.slice_type}
			data-slice-variation={slice?.variation}>
			<Intro
				introduction={slice?.primary.introduction}
				cv={slice?.primary.cv_or_resume}
				github={slice?.primary.github}
				heading={slice?.primary.heading}
			/>
			<TechTable techStack={''} />
		</BoundWrapper>
	);
}
