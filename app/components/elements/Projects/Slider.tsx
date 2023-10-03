'use client';
import styles from './slider.module.css';
import { cn } from '@/app/utils/cn';
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { useWindowSize } from '@uidotdev/usehooks';
import { MobileScreen, tabletScreen } from '@/app/constants/screens';
import SliderItem from './SliderItem';
import { DotButton } from './DotButton';

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max);

type Props = {
	appearance?: {
		carousel?: string;
		innerCarousel?: string;
		slideItem?: string;
	};
	show?: {
		desktop?: number;
		tablet?: number;
		mobile?: number;
	};
	children: React.ReactNode[];
	spacing?: number;
	differential?: number;

const DefaultSliderOptions: EmblaOptionsType = {
	loop: true,
	startIndex: 0,
	containScroll: 'keepSnaps',
};
export default function Slider({
	appearance,
	show,
	children,
	spacing = 0,
	differential = 0.5,
	OPTIONS = DefaultSliderOptions,
}: Props) {
	const [showCount, setShowCount] = useState<number>(1);
	const { width: windowWidth } = useWindowSize();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const [options, setOptions] = useState(OPTIONS);

	const TWEEN_FACTOR = differential;

	const [carousel, emblaApi] = useEmblaCarousel(options);
	const [tweenValues, setTweenValues] = useState<number[]>([]);

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi],
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (windowWidth !== null) {
			if (windowWidth <= MobileScreen) {
				setShowCount(show?.mobile || 1);
				setOptions((prev) => ({ startIndex: 0, ...prev }));
			} else if (windowWidth <= tabletScreen) {
				setShowCount(show?.tablet || 2);
			} else {
				setShowCount(show?.desktop || 3);
			}
		}
	}, [ show?.desktop, show?.mobile, show?.tablet, showCount, windowWidth]);

	const onScroll = useCallback(() => {
		if (!emblaApi) return;

		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();

		const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
			let diffToTarget = scrollSnap - scrollProgress;

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach((loopItem) => {
					const target = loopItem.target();
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target);
						if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
						if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
					}
				});
			}
			const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);

			return numberWithinRange(tweenValue, 0, 1);
		});
		setTweenValues(styles);
	}, [TWEEN_FACTOR, emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on('reInit', onInit);
		emblaApi.on('reInit', onSelect);
		emblaApi.on('select', onSelect);

		onScroll();
		emblaApi.on('scroll', () => {
			flushSync(() => onScroll());
		});
		emblaApi.on('reInit', onScroll);
	}, [emblaApi, onInit, onScroll, onSelect]);

	return (
		<div className={cn(styles.carousel, appearance?.carousel)} ref={carousel}>
			<ul
				className={cn(styles.innerCarousel, appearance?.innerCarousel)}
				style={{
					gap: `${spacing}%`,
				}}>
				{children.map((child, i) => (
					<SliderItem
						className={cn('', appearance?.slideItem)}
						key={i}
						style={{
							minWidth: `${100 / showCount - spacing}%`,
							maxWidth: `${100 / showCount - spacing}%`,
							...(tweenValues.length && {
								transform: `scale(${tweenValues[i]})`,
								opacity: tweenValues[i],
							}),
						}}
						index={i}>
						{child}
					</SliderItem>
				))}
			</ul>
			<div className={cn(styles.dots, appearance)}>
				{scrollSnaps.map((_, index) => (
					<DotButton
						index={index}
						key={index}
						index={index}
						onClick={() => scrollTo(index)}
						className={cn(
							styles.dot,
							index === selectedIndex ? styles.activeDot : '',
						)}
					/>
				))}
			</div>
		</div>
	);
}

// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import { PanInfo, motion } from 'framer-motion';
// import styles from '@/app/components/elements/Projects/slider.module.css';
// import SliderItem, { TOutOfViewEvent } from './SliderItem';
// import { useWindowSize } from '@uidotdev/usehooks';
// import { MobileScreen, tabletScreen } from '@/app/constants/screens';
// import { cn } from '@/app/utils/cn';
// import { PrimaryButton } from '../../UI/Buttons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

// export type SliderProps = {
// 	show?: {
// 		desktop: number;
// 		tablet: number;
// 		mobile: number;
// 	};
// 	spacing?: number;
// 	children?: React.ReactNode[];
// 	appearance: {
// 		container?: string;
// 		wrapper?: string;
// 		items?: string;
// 	};
// 	isInfinite?: boolean;
// 	center?: boolean;
// };

// export default function Slider({
// 	isInfinite,
// 	appearance,
// 	show = { desktop: 4, tablet: 2, mobile: 1 },
// 	spacing = 1,
// 	center,
// 	children,
// }: SliderProps) {
// 	const [showCount, setShowCount] = useState<number>(1);
// 	const { width: windowWidth } = useWindowSize();
// 	const [activeIndex, setActiveIndex] = useState<number>(showCount);
// 	const [lastIndex, setLastIndex] = useState(children?.length || 0);
// 	const [childrenArray, setChildrenArray] = useState<React.ReactNode[]>(children || []);
// 	const [isInfiniteLoop, setIsInfiniteLoop] = useState<boolean>();
// 	const [transformX, setTransformX] = useState(0);
// 	const [direction, setDirection] = useState<'next' | 'prev' | undefined>();
// 	const [transitionEnabled, setTransitionEnabled] = useState(true);

// 	useEffect(() => {
// 		if (windowWidth !== null) {
// 			if (windowWidth <= MobileScreen) {
// 				setShowCount(show.mobile);
// 			} else if (windowWidth <= tabletScreen) {
// 				setShowCount(show.tablet);
// 			} else {
// 				setShowCount(show.desktop);
// 			}
// 		}

// 		if (isInfinite && childrenArray.length > showCount) setIsInfiniteLoop(true);

// 		// if (isInfiniteLoop || center) {
// 		// 	setTransformX(-(100 / showCount));
// 		// }
// 	}, [
// 		center,
// 		childrenArray.length,
// 		isInfinite,
// 		isInfiniteLoop,
// 		show.desktop,
// 		show.mobile,
// 		show.tablet,
// 		showCount,
// 		windowWidth,
// 	]);

// 	useEffect(() => {
// 		setActiveIndex(Math.floor(showCount));
// 		setLastIndex(children?.length || 0);
// 	}, [children?.length, showCount]);

// 	/**************simple slider */

// 	const content = useRef<HTMLDivElement>(null);

// 	/****************Simple Slider */

// 	useEffect(() => {
// 		if (children) setLastIndex(children.length);
// 		setIsInfiniteLoop(isInfinite && lastIndex > showCount);
// 	}, [children, isInfinite, lastIndex, showCount]);

// 	useEffect(() => {
// 		setTransformX(-(activeIndex - Math.floor(showCount)) * (100 / showCount));
// 	}, [activeIndex, showCount]);

// 	/******************Debugging */
// 	useEffect(() => {
// 		console.log('last', lastIndex);
// 		console.log('show', showCount);
// 		console.log('active', activeIndex);
// 		console.log(childrenArray);
// 	}, [showCount, childrenArray, activeIndex, lastIndex]);

// 	/******************Debugging */

// 	const panHandler = (e: PointerEvent, info: PanInfo) => {};

// 	const handleTransitionEnd = () => {
// 		if (isInfiniteLoop) {
// 			if (direction === 'next') {
// 				setDirection(undefined);
// 				const copyChildren = [...childrenArray];
// 				const firstEl = copyChildren.shift();
// 				setChildrenArray([...copyChildren, firstEl]);
// 				setTransitionEnabled(false);
// 				setActiveIndex(Math.floor(showCount));
// 			} else if (direction === 'prev') {
// 				setDirection(undefined);
// 				setTransitionEnabled(false);
// 				setActiveIndex(Math.floor(showCount));
// 			}
// 		}
// 	};

// 	const nextHandler = () => {
// 		setTransitionEnabled(true);
// 		if (isInfiniteLoop || activeIndex < lastIndex) {
// 			setActiveIndex((prevState) => prevState + 1);
// 			setDirection('next');
// 		}
// 	};

// 	const prevHandler = () => {
// 		setTransitionEnabled(true);
// 		if (isInfiniteLoop || activeIndex > showCount) {
// 			setActiveIndex((prevState) => prevState - 1);
// 			setDirection('prev');
// 			if (isInfiniteLoop) {
// 				const copyChildren = [...childrenArray];
// 				const lastEl = copyChildren.pop();
// 				setChildrenArray([lastEl, ...copyChildren]);
// 			}
// 		}
// 	};

// 	return (
// 		<motion.div
// 			className={cn(styles.carousel, appearance.container)}
// 			id="project-carousel">
// 			{(isInfinite || activeIndex > showCount) && (
// 				<PrimaryButton
// 					onClick={prevHandler}
// 					appearance={{ className: 'px-1' }}
// 					className="p-1 min-w-0 absolute border-background inset-y-0 my-auto left-10 z-10 hidden lg:block">
// 					<FontAwesomeIcon icon={faCircleChevronLeft} />
// 				</PrimaryButton>
// 			)}

// 			<motion.div
// 				ref={content}
// 				onPan={panHandler}
// 				whileTap={{ cursor: 'grabbing' }}
// 				className={cn(`${styles.innerCarousel}`, appearance.wrapper)}
// 				style={{
// 					translateX: `${transformX}%`,
// 					gap: `${spacing}%`,
// 					touchAction: 'none',
// 					transitionProperty: `${transitionEnabled ? 'transform' : 'none'}`,
// 				}}
// 				onTransitionEnd={handleTransitionEnd}>
// 				{childrenArray &&
// 					childrenArray.map((child, i) => (
// 						<SliderItem
// 							className={cn('', appearance.items)}
// 							key={i}
// 							style={{
// 								minWidth: `${100 / showCount - spacing}%`,
// 								maxWidth: `${100 / showCount - spacing}%`,
// 							}}
// 							index={i}>
// 							{child}
// 						</SliderItem>
// 					))}
// 			</motion.div>
// 			{(isInfinite || activeIndex !== lastIndex) && (
// 				<PrimaryButton
// 					onClick={nextHandler}
// 					appearance={{ className: 'px-1' }}
// 					className="p-1 min-w-0 absolute z-10 border-background inset-y-0 my-auto right-10  hidden lg:block">
// 					<FontAwesomeIcon icon={faCircleChevronRight} />
// 				</PrimaryButton>
// 			)}
// 		</motion.div>
// 	);
// }
