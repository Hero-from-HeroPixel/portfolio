import { Variants } from 'framer-motion';

export const menuSlide = {
	initial: { x: 'calc(100% + 100px)' },
	enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
	exit: { x: 'calc(100% + 100px)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

export const slide = {
	initial: { x: 80 },
	enter: (i: number) => ({
		x: 0,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
	}),
	exit: (i: number) => ({
		x: 80,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
	}),
};

export const scale = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.4 } },
};

export const lineDraw: Variants = {
	initial: { fillOpacity: 0 },
	animate: (i: number) => ({
		fillOpacity: 1,
		transition: { duration: 0.05, delay: 0.1 * i },
	}),
};

export const round: Variants = {
	initial: { borderRadius: '0rem' },
	animate: { borderRadius: '10rem' },
};
