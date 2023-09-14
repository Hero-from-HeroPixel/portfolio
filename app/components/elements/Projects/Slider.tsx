'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/components/elements/Projects/slider.module.css';
import SliderItem, { TOutOfViewEvent } from './SliderItem';
import { PrimaryButton } from '../../UI/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from '@uidotdev/usehooks';
import { MobileScreen, tabletScreen } from '@/app/constants/screens';

export type SliderProps = {
	show?: {
		desktop: number;
		tablet: number;
		mobile: number;
	};
	spacing?: number;
	children?: React.ReactNode[];
	infiniteScroll?: boolean;
};

export default function Slider({
	show = { desktop: 4, tablet: 2, mobile: 1 },
	spacing = 1,
	children,
}: SliderProps) {
	const container = useRef(null);
	const [showCount, setShowCount] = useState<number>(1);
	const { width: windowWidth } = useWindowSize();
	useEffect(() => {
		if (windowWidth !== null) {
			if (windowWidth <= MobileScreen) setShowCount(show.mobile);
			else if (windowWidth <= tabletScreen) setShowCount(show.tablet);
			else setShowCount(show.desktop);
		}
	}, [windowWidth, show]);
	const [lastIndex, setLastIndex] = useState(children?.length || 0);
	const [currentIndex, setCurrentIndex] = useState(showCount);
	const [touchPosition, setTouchPosition] = useState<number | null>(null);

	useEffect(() => {
		console.log('lastindex', lastIndex);
		console.log('show', showCount);
		console.log('currentIndex', currentIndex);
		console.log((100 / showCount) * (currentIndex - showCount));
	}, [lastIndex, showCount, currentIndex]);

	const startTouchHandler = (e: React.TouchEvent<HTMLDivElement>) => {
		const touchDown = e.touches[0].clientX;
		setTouchPosition(touchDown);
	};
	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		const startTouch = touchPosition;

		if (startTouch === null) return;

		const currentTouch = e.touches[0].clientX;
		const swipeDiff = startTouch - currentTouch;

		if (swipeDiff > 5) nextHandler();
		if (swipeDiff < -5) prevHandler();

		setTouchPosition(null);
	};

	const outOfViewHandler = ({ index, isInView }: TOutOfViewEvent) => {
		console.log(index, ' item is in view: ', isInView);
	};

	const nextHandler = () => {
		if (currentIndex < lastIndex) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const prevHandler = () => {
		if (currentIndex > showCount) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	return (
		<motion.div ref={container} className={styles.carousel} id="project-carousel">
			{currentIndex > showCount && (
				<PrimaryButton
					onClick={prevHandler}
					appearance={{ className: 'px-1' }}
					className="p-1 min-w-0 absolute border-background inset-y-0 my-auto left-10 z-10 hidden lg:block">
					<FontAwesomeIcon icon={faCircleChevronLeft} />
				</PrimaryButton>
			)}
			<motion.div
				className={styles.innerCarousel}
				style={{
					transform: `translateX(-${
						(currentIndex - showCount) * (100 / showCount)
					}%)`,
					gap: `${spacing}%`,
				}}
				onTouchStart={startTouchHandler}
				onTouchMove={handleTouchMove}>
				{children &&
					children.map((child, i) => (
						<SliderItem
							key={i}
							style={{ minWidth: `${100 / showCount - spacing}%` }}
							container={container}
							index={i}
							onOutOfView={outOfViewHandler}>
							{child}
						</SliderItem>
					))}
			</motion.div>
			{currentIndex !== lastIndex && (
				<PrimaryButton
					onPress={nextHandler}
					appearance={{ className: 'px-1' }}
					className="p-1 min-w-0 absolute z-10 border-background inset-y-0 my-auto right-10  hidden lg:block">
					<FontAwesomeIcon icon={faCircleChevronRight} />
				</PrimaryButton>
			)}
		</motion.div>
	);
}
