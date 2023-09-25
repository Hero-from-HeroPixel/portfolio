import React, { useEffect, useRef } from 'react';
import { MotionProps, motion, useInView } from 'framer-motion';
import styles from '@/app/components/elements/Projects/slider.module.css';
import { cn } from '@/app/utils/cn';

export interface TOutOfViewEvent {
	index: number;
	isInView: boolean;
}
interface Props extends MotionProps {
	index: number;
	children: React.ReactNode;
	className?: string;
}

export default function SliderItem({ index, children, className, ...restProps }: Props) {
	return (
		<motion.div {...restProps} className={cn(styles.item, className)}>
			{children}
		</motion.div>
	);
}
