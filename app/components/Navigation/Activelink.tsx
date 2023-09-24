'use client';
import React from 'react';
import { cn } from '@/app/utils/cn';
import styles from '@/app/components/Navigation/links.module.css';
import { Variants, motion } from 'framer-motion';

export function ActiveLink({
	children,
	onAnimateStart,
	initial = true,
	className,
}: {
	children: React.ReactNode;
	onAnimateStart?: () => void;
	initial?: boolean;
	className?: string;
}) {
	const underlineVariants: Variants = {
		start: {
			scaleX: 0.1,
		},
		end: {
			scaleX: 1,
		},
		exit: {
			scaleX: 0.1,
		},
	};
	return (
		<div className={cn(`${styles.active}`, className)}>
			<motion.p className="btn" transition={{ duration: 0.5 }}>
				{children}
			</motion.p>
			<motion.span
				onAnimationStart={onAnimateStart}
				initial={initial && 'start'}
				animate="end"
				exit="exit"
				variants={underlineVariants}
				transition={{ duration: 0.5, type: 'spring' }}
				className="bg-primary block h-1"></motion.span>
		</div>
	);
}
