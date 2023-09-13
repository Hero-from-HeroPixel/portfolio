'use client';
import { prismicClient } from '@/app/lib/clients';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import imgs from '@/app/assets/demoImg';
import Image, { StaticImageData } from 'next/image';
import styles from '@/app/components/elements/Projects/slider.module.css';
import SliderItem from './SliderItem';

type Props = {};

export default function Slider({}: Props) {
	// const [firstIndex, setFirstIndex] = useState(0);
	// const [lastIndex, setLastIndex] = useState(5);
	// const [imageArray, setImageArray] = useState<StaticImageData[]>();

	return (
		<motion.div className={styles.carousel}>
			<motion.div drag="x" className={styles.innerCarousel}>
				{imgs.map((img, i) => (
					<SliderItem img={img} key={i} />
				))}
			</motion.div>
		</motion.div>
	);
}
