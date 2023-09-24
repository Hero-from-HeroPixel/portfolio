'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/components/elements/Projects/slider.module.css';
import SliderItem, { TOutOfViewEvent } from './SliderItem';
import { useWindowSize } from '@uidotdev/usehooks';
import { MobileScreen, tabletScreen } from '@/app/constants/screens';
import { cn } from '@/app/utils/cn';

export type SliderProps = {
	show?: {
		desktop: number;
		tablet: number;
		mobile: number;
	};
	spacing?: number;
	children?: React.ReactNode[];
	appearance: {
		container?: string;
		wrapper?: string;
		items?: string;
	};
	isInfinite?: boolean;
	center?: boolean;
};

export default function Slider({
	isInfinite,
	appearance,
	show = { desktop: 4, tablet: 2, mobile: 1 },
	spacing = 1,
	center,
	children,
}: SliderProps) {
	const container = useRef(null);
	const [showCount, setShowCount] = useState<number>(1);
	const { width: windowWidth } = useWindowSize();
	const [activeIndex, setActiveIndex] = useState<number>();
	const [prevIndex, setPrevIndex] = useState<number>();
	const [nextIndex, setNextIndex] = useState<number>();
	const [childrenArray, setChildrenArray] = useState<React.ReactNode[]>(children || []);
	const [isInfiniteLoop, setIsInfiniteLoop] = useState<boolean>();
	const [transformX, setTransformX] = useState(0);

	useEffect(() => {
		if (windowWidth !== null) {
			if (windowWidth <= MobileScreen) {
				setShowCount(show.mobile);
			} else if (windowWidth <= tabletScreen) {
				setShowCount(show.tablet);
			} else {
				setShowCount(show.desktop);
			}
		}

		if (isInfinite && childrenArray.length > showCount) setIsInfiniteLoop(true);

		if (isInfiniteLoop || center) {
			setTransformX(-(100 / showCount));
		}
	}, [
		center,
		childrenArray.length,
		isInfinite,
		isInfiniteLoop,
		show.desktop,
		show.mobile,
		show.tablet,
		showCount,
		windowWidth,
	]);

	useEffect(() => {
		setActiveIndex(0);
		setNextIndex(1);
		setPrevIndex(childrenArray.length - 1);
	}, [childrenArray.length]);

	/**************simple slider */

	const [dragConstraint, setDragConstraint] = useState<
		{ left: number; right: number } | undefined
	>(undefined);
	const content = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (content && content.current && !isInfiniteLoop) {
			setDragConstraint({
				left: center
					? -(
							content.current.scrollWidth -
							content.current.clientWidth -
							content.current.clientWidth / showCount / 2
					  )
					: -(content.current.scrollWidth - content.current.clientWidth),
				right: center ? content.current.clientWidth / showCount / 2 : 0,
			});
		}
	}, [center, isInfiniteLoop, showCount]);
	/****************Simple Slider */

	// useEffect(() => {
	// 	if (children) setLastIndex(children.length);
	// 	setIsInfiniteLoop(isInfiniteScroll && lastIndex > showCount);
	// }, [children, isInfiniteScroll, lastIndex, showCount]);

	// useEffect(() => {
	// 	if (isInfiniteLoop) {
	// 		// if (currentIndex === showCount || currentIndex === lastIndex) {
	// 		// 	setTransitionEnabled(true);
	// 		// }
	// 	}
	// }, [children, currentIndex, isInfiniteLoop, lastIndex, showCount]);

	/******************Debugging */
	useEffect(() => {
		// console.log('prev', prevIndex);
		// console.log('next', nextIndex);
		// console.log('show', showCount);
		// console.log('active', activeIndex);
		// console.log(childrenArray);
		console.log('drags', dragConstraint);
	}, [showCount, childrenArray, nextIndex, activeIndex, prevIndex, dragConstraint]);

	/******************Debugging */

	// const startTouchHandler = (e: React.TouchEvent<HTMLDivElement>) => {
	// 	const touchDown = e.touches[0].clientX;
	// 	setTouchPosition(touchDown);
	// };
	// const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
	// 	const startTouch = touchPosition;

	// 	if (startTouch === null) return;

	// 	const currentTouch = e.touches[0].clientX;
	// 	const swipeDiff = startTouch - currentTouch;

	// 	if (swipeDiff > 5) nextHandler();
	// 	if (swipeDiff < -5) prevHandler();

	// 	setTouchPosition(null);
	// };

	// const handleTransitionEnd = () => {
	// 	if (isInfiniteLoop) {
	// 		if (currentIndex === showCount) {
	// 			setTransitionEnabled(false);
	// 			setCurrentIndex(lastIndex);
	// 		} else if (currentIndex === lastIndex) {
	// 			setTransitionEnabled(false);
	// 			setCurrentIndex(showCount);
	// 		} else setTransitionEnabled(true);
	// 	}
	// };

	const outOfViewHandler = ({ index, isInView }: TOutOfViewEvent) => {
		// console.log(index, ' item is in view: ', isInView);
	};

	// const nextHandler = () => {
	// 	if (isInfiniteLoop || currentIndex < lastIndex) {
	// 		setCurrentIndex((prevState) => prevState + 1);
	// 		if (isInfiniteLoop) {
	// 			const copyChildren = [...childrenArray];
	// 			const firstEl = copyChildren.shift();
	// 			setChildrenArray([...copyChildren, firstEl]);

	// 			if (currentIndex === lastIndex) setCurrentIndex(showCount);
	// 		}
	// 	}
	// };

	// const prevHandler = () => {
	// 	if (isInfiniteLoop || currentIndex > showCount) {
	// 		setCurrentIndex((prevState) => prevState - 1);
	// 		if (isInfiniteLoop) {
	// 			const copyChildren = [...childrenArray];
	// 			const lastEl = copyChildren.pop();
	// 			setChildrenArray([lastEl, ...copyChildren]);
	// 			if (currentIndex === showCount) setCurrentIndex(lastIndex);
	// 		}
	// 	}
	// };

	return (
		<motion.div
			ref={container}
			className={cn(styles.carousel, appearance.container)}
			id="project-carousel">
			{/* {(isInfiniteScroll || currentIndex > showCount) && (
				<PrimaryButton
					onClick={prevHandler}
					appearance={{ className: 'px-1' }}
					className="p-1 min-w-0 absolute border-background inset-y-0 my-auto left-10 z-10 hidden lg:block">
					<FontAwesomeIcon icon={faCircleChevronLeft} />
				</PrimaryButton>
			)} */}
			{/* <motion.div
				drag="x"
				ref={content}
				dragConstraints={{ right: 0, left: -dragConstraint }}
				whileTap={{ cursor: 'grabbing' }}
				dragElastic={0.2}
				className={`${styles.innerCarousel} ${
					transitionEnabled ? 'transition-transform' : ''
				}`}
				style={{
					transform: `translateX(-${
						(currentIndex - showCount) * (100 / showCount)
					}%)`,
					gap: `${spacing}%`,
				}}
				onTouchStart={startTouchHandler}
				onTouchMove={handleTouchMove}> */}
			<motion.div
				ref={content}
				dragConstraints={dragConstraint}
				drag="x"
				whileTap={{ cursor: 'grabbing' }}
				className={cn(`${styles.innerCarousel}`, appearance.wrapper)}
				style={{
					translateX: `${transformX}%`,
					gap: `${spacing}%`,
					touchAction: 'none',
				}}>
				{childrenArray &&
					childrenArray.map((child, i) => (
						<SliderItem
							container={container}
							onOutOfView={outOfViewHandler}
							className={cn('', appearance.items)}
							key={i}
							style={{
								minWidth: `${100 / showCount - spacing}%`,
								maxWidth: `${100 / showCount - spacing}%`,
							}}
							index={i}>
							{child}
						</SliderItem>
					))}
			</motion.div>
			{/* {(isInfiniteScroll || currentIndex !== lastIndex) && (
				<PrimaryButton
					onClick={nextHandler}
					appearance={{ className: 'px-1' }}
					className="p-1 min-w-0 absolute z-10 border-background inset-y-0 my-auto right-10  hidden lg:block">
					<FontAwesomeIcon icon={faCircleChevronRight} />
				</PrimaryButton>
			)} */}
		</motion.div>
	);
}
