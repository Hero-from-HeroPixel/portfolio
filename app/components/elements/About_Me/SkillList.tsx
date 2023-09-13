import React from 'react';
import Skill, { SkillProps } from './Skill';
import Heading from '@/app/components/UI/Heading';

type Props = {
	skillList: SkillProps[];
	title: string;
};

export default function SkillList({ skillList, title }: Props) {
	return (
		<div className="flex flex-col gap-2 w-40">
			<Heading className="mt-5" as="h4">
				{title}
			</Heading>
			{skillList.map((skill) => (
				<Skill
					key={skill.title}
					title={skill.title}
					icon={skill.icon}
					viewBox={skill.viewBox}
					iconAsName={skill.iconAsName}
				/>
			))}
		</div>
	);
}
