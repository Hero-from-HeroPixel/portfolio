import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '@/app/components/elements/Projects/slider.module.css';
type Props = {
	img: StaticImageData;
};

export default function SliderItem({ img }: Props) {
	return (
		<motion.div className={styles.item}>
			<Image
				draggable={false}
				src={img.src}
				alt=""
				width={img.width / 3}
				height={img.height / 3}
				className={styles.image}
			/>
		</motion.div>
	);
}
