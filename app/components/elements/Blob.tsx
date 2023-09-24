'use client';
import React, { useEffect } from 'react';
import styles from '@/app/components/elements/Blob.module.css';
import { useWindowSize } from '@uidotdev/usehooks';
import { MobileScreen } from '@/app/constants/screens';

type Props = {};

function blobAnimate(el: HTMLElement, left: number, top: number, duration?: number) {
	el.animate(
		{
			left: `${left}px`,
			top: `${top}px`,
		},
		{ duration: duration || 3000, fill: 'forwards' },
	);
}

function touchEventHandler(e: TouchEvent) {
	const blobEl = document.getElementById('blob');
	const screenHeight = window.innerHeight;
	const screenWidth = window.innerWidth;
	const x = e.touches[0].screenX;
	const y = e.touches[0].screenY;

	if (blobEl) blobAnimate(blobEl, x / 2, screenHeight + y, 2500);
}

function touchMoveHandler(e: TouchEvent) {
	const blobEl = document.getElementById('blob');
	const screenHeight = window.innerHeight;
	const screenWidth = window.innerWidth;
	const x = e.touches[0].screenX;
	const y = e.touches[0].screenY;

	if (blobEl) blobAnimate(blobEl, x, y, 500);
}

export default function Blob({}: Props) {
	const { width: windowWidth, height: windowHeight } = useWindowSize();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const blobEl = document.getElementById('blob');
			if (blobEl) {
				if (windowWidth !== null && windowWidth <= MobileScreen) {
					window.addEventListener('touchstart', touchEventHandler);
					window.addEventListener('touchmove', touchMoveHandler);
				} else {
					window.onpointermove = (e) => {
						const { clientX, clientY } = e;
						blobAnimate(blobEl, clientX, clientY, 2500);
					};
				}
			}
		}
		//return window?.removeEventListener('touchstart', touchEventHandler);
	}, [windowWidth]);

	return (
		<>
			<div id="blob" className={styles.blob}></div>
			<div id="blur" className={styles.blur}></div>
		</>
	);
}
