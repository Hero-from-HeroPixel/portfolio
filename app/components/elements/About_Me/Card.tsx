'use client';
import { cn } from '@/app/utils/cn';
import { SkillDocument } from '@/prismicio-types';
import React from 'react';
import { Variants, motion } from 'framer-motion';

type Props = {
	className?: string;
	techStack: (SkillDocument<string> | undefined)[];
};

const variants: Variants = {
	initial: {},
	enter: {},
};

export default function Card({ className }: Props) {
	return (
		<motion.div
			className={cn(
				'p-10 rounded-full border-s-2 border-accent bg-glass hover:bg-glass_hover backdrop-blur-xl transition-all duration-200',
				className,
			)}>
			JobCard
		</motion.div>
	);
}
