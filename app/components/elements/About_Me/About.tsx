import React from 'react';
import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Intro from '@/app/components/elements/About_Me/Intro';
import TechTable from '@/app/components/elements/About_Me/TechTable';
import { Content } from '@prismicio/client';
import fallBack from '@/app/constants/About.json';
import { GITHUB_LINK, RESUME_LINK } from '@/app/constants/Social';

interface AboutPageProps extends PageProps {
	slice?: Content.JobSlice;
}

export default async function About({ id, slice }: AboutPageProps) {
	const introduction = fallBack.about.introduction;
	const techStack = slice?.primary.tech_skills;
	const designStack = slice?.primary.design_skills;
	const otherSkills = slice?.primary.other_skills;
	return (
		<BoundWrapper
			className="px-5 gap-8"
			id={id}
			data-slice-type={slice?.slice_type}
			data-slice-variation={slice?.variation}>
			<Intro
				introduction={slice?.primary.introduction || introduction}
				cv={RESUME_LINK || slice?.primary.cv_or_resume}
				github={slice?.primary.github || GITHUB_LINK}
				heading={slice?.primary.heading || 'About Me'}
			/>
			<TechTable
				techStack={techStack}
				designStack={designStack}
				otherSkills={otherSkills}
			/>
		</BoundWrapper>
	);
}
