'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/components/elements/Projects/slider.module.css';
import SliderItem, { TOutOfViewEvent } from './SliderItem';
import { PrimaryButton } from '../../UI/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
	show?: number;
	spacing?: number;
	children?: React.ReactNode[];
};

export default function Slider({ show = 4, spacing = 1, children }: Props) {
	const container = useRef(null);
	const [lastIndex, setLastIndex] = useState(children?.length || 0);
	const [currentIndex, setCurrentIndex] = useState(show);

	useEffect(() => {
		console.log('lastindex', lastIndex);
		console.log('show', show);
		console.log('currentIndex', currentIndex);
		console.log((100 / show) * (currentIndex - show));
	}, [lastIndex, show, currentIndex]);

	const outOfViewHandler = ({ index, isInView }: TOutOfViewEvent) => {
		console.log(index, ' item is in view: ', isInView);
	};
	const nextHandler = () => {
		if (currentIndex < lastIndex) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const prevHandler = () => {
		if (currentIndex > show) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	return (
		<motion.div ref={container} className={styles.carousel} id="project-carousel">
			{currentIndex > show && (
				<PrimaryButton
					onClick={prevHandler}
					appearance={{ className: 'px-1' }}
					className="p-1 min-w-0 absolute border-background inset-y-0 my-auto left-10 z-10">
					<FontAwesomeIcon icon={faCircleChevronLeft} />
				</PrimaryButton>
			)}
			<motion.div
				className={styles.innerCarousel}
				style={{
					transform: `translateX(-${(currentIndex - show) * (100 / show)}%)`,
					gap: `${spacing}%`,
				}}>
				{children &&
					children.map((child, i) => (
						<SliderItem
							style={{ minWidth: `${100 / show - spacing}%` }}
							container={container}
							index={i}
							key={i}
							onOutOfView={outOfViewHandler}>
							{child}
						</SliderItem>
					))}
			</motion.div>
			{currentIndex !== lastIndex && (
				<PrimaryButton
					onPress={nextHandler}
					appearance={{ className: 'px-1' }}
					className="p-1 min-w-0 absolute z-10 border-background inset-y-0 my-auto right-10">
					<FontAwesomeIcon icon={faCircleChevronRight} />
				</PrimaryButton>
			)}
		</motion.div>
	);
}
