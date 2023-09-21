import React from 'react';
import Skill, { SkillProps } from './Skill';
import Heading from '@/app/components/UI/Heading';
import { GroupField, isFilled } from '@prismicio/client';
import { Simplify, SkillsListDocumentDataSkillsItem } from '@/prismicio-types';
import { prismicClient } from '@/app/lib/clients';

type Props = {
	skills: GroupField<Simplify<SkillsListDocumentDataSkillsItem>> | undefined;
	title: string;
};

export default async function SkillList({ skills, title }: Props) {
	let Skills;
	if (skills) {
		Skills = await Promise.all(
			skills.map(({ skill }) => {
				if (isFilled.contentRelationship(skill) && skill.uid) {
					return prismicClient.getByUID('skill', skill.uid);
				}
			}),
		);
	}

	return (
		<div className="flex flex-col gap-2 w-40">
			<Heading className="mt-5" as="h4">
				{title}
			</Heading>
			<ul>
				{Skills?.map((skill) => (
					<Skill
						title={skill?.data.title as string}
						key={skill?.id}
						icon={skill?.data.icon}
						iconAsName={skill?.data.icon_as_name as string}
					/>
				))}
			</ul>
		</div>
	);
}
