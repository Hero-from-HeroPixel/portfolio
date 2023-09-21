import React from 'react';
import Skill, { SkillProps } from './Skill';
import Heading from '@/app/components/UI/Heading';
import { GroupField, isFilled } from '@prismicio/client';
import {
	Simplify,
	SkillDocument,
	SkillsListDocumentDataSkillListsItem,
} from '@/prismicio-types';
import { prismicClient } from '@/app/lib/clients';

type Props = {
	skillList: GroupField<Simplify<SkillsListDocumentDataSkillListsItem>>;
	title: string;
};

export default async function SkillList({ skillList, title }: Props) {
	return (
		<div className="flex flex-col gap-2 w-40">
			<Heading className="mt-5" as="h4">
				{title}
			</Heading>
			<ul>
				{skillList.map(({ skill_list }) => {
					if (isFilled.contentRelationship(skill_list) && skill_list.uid) {
						return (
							<div className="" key={skill_list.id}></div>
							// <Skill
							// 	title={skill.data.title as string}
							// 	key={skill.id}
							// 	icon={skill.data.icon}
							// 	iconAsName={skill.data.icon_as_name as string}
							// />
						);
					}
					// const skill = await prismicClient.getByID(skillList.id);
					// console.log(skill);
				})}
			</ul>
		</div>
	);
}
