import React from 'react';
import Heading from '@/app/components/UI/Heading';
import styles from '@/app/components/elements/About_Me/techTable.module.css';
import { prismicClient } from '@/app/lib/clients';
import SkillList from './SkillList';
import { ContentRelationshipField, isFilled } from '@prismicio/client';

type Props = {
	techStack: ContentRelationshipField<'tech_skills'> | undefined;
	designStack: ContentRelationshipField<'design_skills'> | undefined;
	otherStack: ContentRelationshipField<'other_skills'> | undefined;
};

export default async function TechTable({ techStack, designStack, otherStack }: Props) {
	let techSkills;
	let designSkills;
	let otherSkills;

	techSkills = await prismicClient.getSingle('tech_skills');
	designSkills = await prismicClient.getSingle('design_skills');
	otherSkills = await prismicClient.getSingle('other_skills');

	const techSkillLists = await Promise.all(
		techSkills.data.skills_lists.map(({ skills_list }) => {
			if (isFilled.contentRelationship(skills_list) && skills_list.uid) {
				return prismicClient.getByUID('skills_list', skills_list.uid);
			}
		}),
	);

	const designSkillsLists = await Promise.all(
		designSkills.data.skills_lists.map(({ skills_list }) => {
			if (isFilled.contentRelationship(skills_list) && skills_list.uid) {
				return prismicClient.getByUID('skills_list', skills_list.uid);
			}
		}),
	);

	const otherSkillsLists = await Promise.all(
		otherSkills.data.skill_lists.map(({ skills_list }) => {
			if (isFilled.contentRelationship(skills_list) && skills_list.uid) {
				return prismicClient.getByUID('skills_list', skills_list.uid);
			}
		}),
	);

	return (
		<div className={styles.container}>
			<div className={`${styles.category}`}>
				<Heading as="h3">{techSkills.data.title}</Heading>
				<ul className={styles.techList}>
					{techSkillLists.map((skillList) => {
						return (
							<SkillList
								title={skillList?.data.title as string}
								key={skillList?.id}
								skills={skillList?.data.Skills}
							/>
						);
					})}
				</ul>
			</div>
			<div className="grid lg:grid-cols-3 gap-x-10">
				<div className={`${styles.category} col-span-1`}>
					<Heading as="h3">{designSkills.data.title}</Heading>
					<ul className={styles.techList}>
						{designSkillsLists.map((skillList) => {
							return (
								<SkillList
									title={skillList?.data.title as string}
									key={skillList?.id}
									skills={skillList?.data.Skills}
								/>
							);
						})}
					</ul>
				</div>
				<div className={`${styles.category} col-span-2`}>
					<Heading as="h3">{otherSkills.data.title}</Heading>
					<ul className={styles.techList}>
						{otherSkillsLists.map((skillList) => {
							return (
								<SkillList
									title={skillList?.data.title as string}
									key={skillList?.id}
									skills={skillList?.data.Skills}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
