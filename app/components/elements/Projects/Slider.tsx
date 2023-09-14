'use client';
import React, { useRef, useState } from 'react';
import { PanInfo, motion } from 'framer-motion';
import imgs from '@/app/assets/demoImg';
import styles from '@/app/components/elements/Projects/slider.module.css';
import SliderItem, { TOutOfViewEvent } from './SliderItem';
import { PrimaryButton } from '../../UI/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
	show?: number;
};

export default function Slider({ show = 4 }: Props) {
	const container = useRef(null);
	const [images, setImages] = useState(imgs);

	const arrayUpdateHandler = ({ index, isInView }: TOutOfViewEvent) => {
		console.log(index, ' item is in view: ', isInView);
	};
	const [firstIndex, setFirstIndex] = useState(0);
	const [lastIndex, setLastIndex] = useState(show - 1);
	const dragHandler = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {};
	return (
		<motion.div ref={container} className={styles.carousel} id="project-carousel">
			<PrimaryButton
				appearance={{ className: 'px-1' }}
				className="p-1 min-w-0 absolute border-background inset-y-0 my-auto left-10 z-10">
				<FontAwesomeIcon icon={faCircleChevronLeft} />
			</PrimaryButton>
			<motion.div drag="x" onDrag={dragHandler} className={styles.innerCarousel}>
				{images.map((img, i) => (
					<SliderItem
						container={container}
						index={i}
						key={i}
						onOutOfView={arrayUpdateHandler}>
						<div className="aspect-square flex justify-center items-center text-black bg-white rounded-3xl text-9xl">
							{i}
						</div>
					</SliderItem>
				))}
			</motion.div>
			<PrimaryButton
				appearance={{ className: 'px-1' }}
				className="p-1 min-w-0 absolute z-10 border-background inset-y-0 my-auto right-10">
				<FontAwesomeIcon icon={faCircleChevronRight} />
			</PrimaryButton>
		</motion.div>
	);
}
