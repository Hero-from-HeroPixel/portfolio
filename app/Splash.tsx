'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/app/loading.module.css';
type Props = {};

export default function Splash({}: Props) {
	const [status, setStatus] = useState<'loading' | 'animating' | 'complete'>('animating');

	const animCompleteHandler = () => setStatus('complete');

	useEffect(() => {
		const animHandler = setTimeout(animCompleteHandler, 1500);
	}, []);
	return (
		<>
			{status !== 'complete' && (
				<div className={styles.container}>
					<span className={styles.loader}>
						<p className="z-50 text-3xl text-center lg:text-6xl 2xl:text-7xl">
							<span className="font-black">
								Hi, <span className="font-light ">I am</span>
							</span>
						</p>
					</span>
				</div>
			)}
		</>
	);
}
