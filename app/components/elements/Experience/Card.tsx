'use client';
import { cn } from '@/app/utils/cn';
import { JobDocument, SkillDocument } from '@/prismicio-types';
import React, { useEffect, useState } from 'react';
import { Variants, motion } from 'framer-motion';
import Heading from '@/app/components/UI/Heading';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import styles from '@/app/components/elements/Experience/experience.module.css';
import Tech, { IconListT } from '@/app/components/elements/Experience/Tech';
import { scrollTo } from '@/app/utils/scrollTo';
import { useWindowSize } from '@uidotdev/usehooks';
import { MobileScreen } from '@/app/constants/screens';

const components: JSXMapSerializer = {
	paragraph: ({ children }) => (
		<motion.p
			initial="initial"
			whileInView="enter"
			variants={contentAnim}
			viewport={{ once: true, amount: 0.3 }}
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
			viewport={{ once: true, amount: 0.3 }}
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
	phoneInView: {
		translateX: 0,
		opacity: 1,
		borderColor: '#3300FF',
		background: `linear-gradient(111deg, rgba(0, 0, 0, 0.11) 20.87%, rgba(0, 0, 0, 0.13) 72.76%),
		radial-gradient(
			101.34% 61% at 58.3% 43.12%,
			rgba(0, 0, 0, 0.3) 0%,
			rgba(0, 0, 0, 0.1) 100%
		)`,
		boxShadow: `-2px 2px 5px 2px rgba(51, 0, 255, 0.5), 1px -3px 9px 10px rgba(51, 0, 255, 0.3)`,
		transition: { staggerChildren: 0.2 },
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
	const { width: windowWidth } = useWindowSize();
	const [inViewAnim, setInViewAnim] = useState<'enter' | 'phoneInView'>('enter');

	useEffect(() => {
		if (windowWidth !== null && windowWidth <= MobileScreen) {
			setInViewAnim('phoneInView');
		}
	}, [windowWidth]);

	const { data } = job;
	return (
		<motion.div
			onClick={() =>
				scrollTo({ targetId: job.data.project_id as string }, { behavior: 'smooth' })
			}
			initial="initial"
			variants={cardAnim}
			whileInView={inViewAnim}
			viewport={{ once: true, amount: 0.2 }}
			className={cn(styles.card, className)}>
			<div className="flex flex-col">
				<Heading as="h4">{data.company}</Heading>
				<Heading as="h5" className="light">
					{data.position}
				</Heading>
				<div className="my-6 lg:w-3/4">
					<PrismicRichText components={components} field={data.description} />
				</div>
			</div>
			<div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-0 gap-4">
				{data.responsibilities.length > 0 && (
					<div className="lg:w-1/2 lg:px-10">
						<p>Responsibilities</p>
						<PrismicRichText
							components={components}
							field={data.responsibilities}
						/>
					</div>
				)}
				<div className="lg:w-1/2 flex flex-wrap gap-4 lg:gap-4">
					{data.duties.length > 0 && (
						<div className="">
							<p>Duties</p>
							<PrismicRichText components={components} field={data.duties} />
						</div>
					)}
					{data.tech_stack.length > 0 && (
						<div className="">
							<p>Tech Stack</p>
							<ul className="flex flex-wrap gap-x-5 gap-y-2 lg:w-3/4">
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
					)}
				</div>
			</div>
		</motion.div>
	);
}
