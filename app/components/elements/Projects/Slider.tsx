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
	isInfiniteScroll?: boolean;
};

export default function Slider({
	show = { desktop: 4, tablet: 2, mobile: 1 },
	spacing = 1,
	children,
	isInfiniteScroll = false,
}: SliderProps) {
	const container = useRef(null);
	const [showCount, setShowCount] = useState<number>(1);
	const { width: windowWidth } = useWindowSize();
	const [currentIndex, setCurrentIndex] = useState<number>(showCount);
	const [lastIndex, setLastIndex] = useState(children?.length || 0);
	const [touchPosition, setTouchPosition] = useState<number | null>(null);
	const [isInfiniteLoop, setIsInfiniteLoop] = useState(
		isInfiniteScroll && lastIndex > showCount,
	);
	const [childrenArray, setChildrenArray] = useState<React.ReactNode[]>(children || []);

	useEffect(() => {
		if (windowWidth !== null) {
			if (windowWidth <= MobileScreen) {
				setShowCount(show.mobile);
				setCurrentIndex(show.mobile);
			} else if (windowWidth <= tabletScreen) {
				setShowCount(show.tablet);
				setCurrentIndex(show.tablet);
			} else {
				setShowCount(show.desktop);
				setCurrentIndex(show.desktop);
			}
		}
	}, [show.desktop, show.mobile, show.tablet, windowWidth]);

	/******************Debugging */
	useEffect(() => {
		console.log('lastindex', lastIndex);
		console.log('show', showCount);
		console.log('currentIndex', currentIndex);

		console.log(childrenArray);
	}, [lastIndex, showCount, currentIndex, childrenArray]);

	/******************Debugging */

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
		// console.log(index, ' item is in view: ', isInView);
	};

	const nextHandler = () => {
		if (isInfiniteLoop || currentIndex < lastIndex) {
			setCurrentIndex((prevState) => prevState + 1);
			if (isInfiniteLoop) {
				const copyChildren = [...childrenArray];
				const firstEl = copyChildren.shift();
				setChildrenArray([...copyChildren, firstEl]);

				if (currentIndex === lastIndex) setCurrentIndex(showCount);
			}
		}
	};

	const prevHandler = () => {
		if (isInfiniteLoop || currentIndex > showCount) {
			setCurrentIndex((prevState) => prevState - 1);
			if (isInfiniteLoop) {
				const copyChildren = [...childrenArray];
				const lastEl = copyChildren.pop();
				setChildrenArray([lastEl, ...copyChildren]);
				if (currentIndex === showCount) setCurrentIndex(lastIndex);
			}
		}
	};

	return (
		<motion.div ref={container} className={styles.carousel} id="project-carousel">
			{(isInfiniteScroll || currentIndex > showCount) && (
				<PrimaryButton
					onClick={prevHandler}
					appearance={{ className: 'px-1' }}
					className="p-1 min-w-0 absolute border-background inset-y-0 my-auto left-10 z-10 hidden lg:block">
					<FontAwesomeIcon icon={faCircleChevronLeft} />
				</PrimaryButton>
			)}
			<motion.div
				whileTap={{ cursor: 'grabbing' }}
				className={`${styles.innerCarousel}`}
				style={{
					transform: `translateX(-${
						(currentIndex - showCount) * (100 / showCount)
					}%)`,
					gap: `${spacing}%`,
				}}
				onTouchStart={startTouchHandler}
				onTouchMove={handleTouchMove}>
				<motion.div
					whileTap={{ cursor: 'grabbing' }}
					className={`${styles.innerCarousel}`}
					style={{
						transform: `translateX(-${
							(currentIndex - showCount) * (100 / showCount)
						}%)`,
						gap: `${spacing}%`,
					}}>
					{childrenArray &&
						childrenArray.map((child, i) => (
							<SliderItem
								key={i}
								style={{
									minWidth: `${100 / showCount - spacing}%`,
									maxWidth: `${100 / showCount - spacing}%`,
								}}
								container={container}
								index={i}
								onOutOfView={outOfViewHandler}>
								{child}
							</SliderItem>
						))}
				</motion.div>
				{(isInfiniteScroll || currentIndex !== lastIndex) && (
					<PrimaryButton
						onClick={nextHandler}
						appearance={{ className: 'px-1' }}
						className="p-1 min-w-0 absolute z-10 border-background inset-y-0 my-auto right-10  hidden lg:block">
						<FontAwesomeIcon icon={faCircleChevronRight} />
					</PrimaryButton>
				)}
			</motion.div>
		</motion.div>
	);
}
