'use client';
import { cn } from '@/app/utils/cn';
import { JobDocument, SkillDocument } from '@/prismicio-types';
import React from 'react';
import { Variants, motion } from 'framer-motion';
import Heading from '../../UI/Heading';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import styles from '@/app/components/elements/About_Me/timeline.module.css';
import Tech, { IconListT } from './Tech';

const components: JSXMapSerializer = {
	paragraph: ({ children }) => (
		<motion.p
			initial="initial"
			whileInView="enter"
			variants={contentAnim}
			viewport={{ amount: 0.3 }}
			className="leading-tight light sm">
			{children}
		</motion.p>
	),
	strong: ({ children }) => <strong className="font-medium">{children}</strong>,
	listItem: ({ children }) => (
		<motion.li
			initial="initial"
			whileInView="enter"
			variants={contentAnim}
			viewport={{ amount: 0.3 }}
			className="list-disc">
			<p className="light sm">{children}</p>
		</motion.li>
	),
	list: ({ children }) => <ul className="ps-5">{children}</ul>,
};

type Props = {
	className?: string;
	techStack: (SkillDocument<string> | undefined)[];
	job: JobDocument<string>;
};

const cardAnim: Variants = {
	initial: {
		translateX: -50,
		opacity: 0,
	},
	enter: {
		translateX: 0,
		opacity: 1,
		transition: { delayChildren: 0.2 },
	},
};

const contentAnim: Variants = {
	initial: {
		translateY: 50,
		opacity: 0,
	},
	enter: {
		translateY: 0,
		opacity: 1,
	},
};

export default function Card({ className, techStack, job }: Props) {
	const { data } = job;
	return (
		<motion.div
			initial="initial"
			variants={cardAnim}
			whileInView="enter"
			viewport={{ once: true, amount: 0.4 }}
			className={cn(styles.card, className)}>
			<div className="flex flex-col">
				<Heading as="h5">{data.company}</Heading>
				<Heading as="h6" className="light">
					{data.position}
				</Heading>
				<div className="my-6 w-3/4">
					<PrismicRichText components={components} field={data.description} />
				</div>
			</div>
			<div className="flex flex-wrap">
				<div className="w-1/2 px-10">
					<p>Responsibilities</p>
					<PrismicRichText components={components} field={data.responsibilities} />
				</div>
				<div className="w-1/2 flex flex-wrap gap-4">
					<div className="">
						<p>Duties</p>
						<PrismicRichText components={components} field={data.duties} />
					</div>
					<div className="">
						<p>Tech Stack</p>
						<ul className="flex flex-wrap gap-x-5 gap-y-2 w-3/4">
							{techStack.map((item) => (
								<li key={item?.data.title}>
									<Tech
										icon={item?.data.icon as IconListT}
										iconAsName={item?.data.icon_as_name}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
