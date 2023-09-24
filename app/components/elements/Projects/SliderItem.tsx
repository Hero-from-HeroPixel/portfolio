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
	container: React.RefObject<HTMLDivElement>;
	className?: string;
	onOutOfView?: ({ index, isInView }: TOutOfViewEvent) => void;
}

export default function SliderItem({
	onOutOfView,
	container,
	index,
	children,
	className,
	...restProps
}: Props) {
	const item = useRef(null);
	const isInView = useInView(item);

	useEffect(() => {
		if (onOutOfView) {
			onOutOfView({ isInView, index });
		}
	}, [isInView, index, onOutOfView]);

	/**********Transform logic */
	// useEffect(() => {
	// 	const carouselEl = document.getElementById('project-carousel');
	// 	const carouselItemEl = document.getElementById(`carousel-item${index}`);
	// 	const carouselRect = carouselEl?.getBoundingClientRect();
	// 	const carouselItemRect = carouselItemEl?.getBoundingClientRect();
	// 	const carouselItemPosition = {
	// 		y: carouselRect?.top! - carouselItemRect?.top!,
	// 		x: carouselRect?.left! - carouselItemRect?.left!,
	// 	};
	// }, [index]);
	/**********Transform logic End */

	return (
		<motion.div {...restProps} className={cn(styles.item, className)} ref={item}>
			{/* <Image
				id={`carousel-item${index}`}
				draggable={false}
				src={img.src}
				alt=""
				width={img.width / 3}
				height={img.height / 3}
				className={styles.image}
			/> */}
			{children}
		</motion.div>
	);
}
