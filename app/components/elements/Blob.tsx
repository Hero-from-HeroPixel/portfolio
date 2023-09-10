'use client';
import React, { useEffect, useRef } from 'react';
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
	if (blobEl) blobAnimate(blobEl, e.touches[0].screenX / 2, e.touches[0].screenY, 1500);
}

export default function Blob({}: Props) {
	const { width: windowWidth, height: windowHeight } = useWindowSize();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const blobEl = document.getElementById('blob');
			if (blobEl) {
				if (windowWidth !== null && windowWidth <= MobileScreen) {
					window.addEventListener('touchstart', touchEventHandler);
				} else {
					window.onpointermove = (e) => {
						const { clientX, clientY } = e;
						blobAnimate(blobEl, clientX, clientY, 2000);
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
