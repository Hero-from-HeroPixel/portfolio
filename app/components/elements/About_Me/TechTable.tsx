import React from 'react';
import Heading from '@/app/components/UI/Heading';
import styles from '@/app/components/elements/About_Me/techTable.module.css';
import Icon, {
	canva,
	cloudinary,
	contentful,
	css,
	elementor,
	figma,
	framer,
	github,
	html,
	javascript,
	prismic,
	shopify,
	typescript,
	webflow,
	wordpress,
} from '../../icons';
import { PSIcon } from '../../icons/PS';
import Image from 'next/image';
import { Github } from '../../icons/Github';
import { prismicClient } from '@/app/lib/clients';
import SkillList from './SkillList';
import { SkillProps } from './Skill';

type Props = {};

export default async function TechTable({}: Props) {
	return (
		<div className={styles.container}>
			<div className={`${styles.category} `}>
				<Heading as="h3">Tech Stack</Heading>
				<div className={styles.techList}>
					<SkillList skillList={languages} title="Languages" />
					<SkillList skillList={frameworks} title="Frameworks" />
					<SkillList skillList={cicd} title="CI/CD" />
					<SkillList skillList={databases} title="Databases" />
					<SkillList skillList={apis} title="APIS" />
				</div>
			</div>
			<div className={`${styles.category} `}>
				<Heading as="h3">Design Stack</Heading>
				<div className={styles.techList}>
					<SkillList skillList={design} title="" />
					<SkillList skillList={webTools} title="Web Tools" />
				</div>
			</div>
			<div className={styles.category}>
				<Heading as="h3">Other</Heading>
				<div className={styles.techList}>
					<SkillList skillList={commerce} title="Commerce" />
					<SkillList skillList={cms} title="CMS" />
					<SkillList skillList={dam} title="DAM" />
					<SkillList skillList={mailing} title="Mailing" />
				</div>
			</div>
		</div>
	);
}

const languages: SkillProps[] = [
	{
		icon: html,
		title: 'HTML 5',
	},
	{
		icon: css,
		title: 'CSS 3',
	},
	{
		icon: javascript,
		title: 'JavaScript',
	},
	{
		icon: typescript,
		title: 'TypeScript',
	},
	{
		iconAsName: 'php',
		title: 'php',
	},
	{
		iconAsName: 'sql',
		title: 'SQL',
	},
];

const frameworks: SkillProps[] = [
	{
		title: 'React',
		iconAsName: 'react',
	},
	{
		title: 'NextJS 13',
		iconAsName: 'nextjs',
	},
	{
		title: 'Node',
		iconAsName: 'node',
	},
	{
		title: 'Express',
		iconAsName: 'express',
	},
	{
		title: 'Tailwind CSS',
		iconAsName: 'tailwind',
	},
	{
		title: 'WordPress',
		iconAsName: 'wordpress',
	},
];

const databases: SkillProps[] = [
	{
		title: 'PostgreSQL',
		iconAsName: 'pgsql',
	},
	{
		title: 'MongoDB',
		iconAsName: 'mongo',
	},
	{
		title: 'Redis',
		iconAsName: 'redis',
	},
	{
		title: 'mySQL',
		iconAsName: 'mysql',
	},
];

const apis: SkillProps[] = [
	{
		title: 'Restful',
		iconAsName: 'rest',
	},
	{
		title: 'GraphQL',
		iconAsName: 'graphql',
	},
];

const cicd: SkillProps[] = [
	{
		title: 'Git',
		iconAsName: 'git',
	},
	{
		title: 'GitHub',
		icon: github,
		viewBox: '0 0 512 512',
	},
	{
		title: 'Netlify',
		iconAsName: 'netlify',
	},
	{
		title: 'Digital Ocean',
		iconAsName: 'do',
	},
	{
		title: 'cPanel',
		iconAsName: 'cpanel',
	},
];

const design: SkillProps[] = [
	{
		title: 'Figma',
		icon: figma,
	},
	{
		title: 'Photoshop',
		icon: PSIcon,
	},
	{
		title: 'Canva',
		icon: canva,
	},
];

const webTools: SkillProps[] = [
	{
		title: 'Elementor',
		icon: elementor,
	},
	{
		title: 'Framer',
		icon: framer,
	},
	{
		title: 'Webflow',
		icon: webflow,
	},
	{
		title: 'Prismic',
		icon: prismic,
	},
];

const commerce: SkillProps[] = [
	{
		title: 'MedusaJS',
		iconAsName: 'medusa',
	},
	{
		title: 'WooCommerce',
		iconAsName: 'woo',
	},
	{
		title: 'Shopify',
		icon: shopify,
	},
];

const cms: SkillProps[] = [
	{
		title: 'Contentful',
		icon: contentful,
	},
	{
		title: 'WordPress',
		icon: wordpress,
	},
	{
		title: 'Prismic',
		icon: prismic,
	},
];

const dam: SkillProps[] = [
	{
		title: 'Cloudinary',
		icon: cloudinary,
	},
];

const mailing: SkillProps[] = [
	{
		title: 'Postmark',
		iconAsName: 'postmark',
	},
	{
		title: 'Nodemailer',
		iconAsName: 'nodemailer',
	},
];
