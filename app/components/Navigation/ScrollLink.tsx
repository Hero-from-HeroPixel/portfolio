'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/app/utils/cn';
import { Link } from '@nextui-org/link';
import styles from '@/app/components/Navigation/links.module.css';
import { AnimatePresence } from 'framer-motion';
import { HeroLinkProps } from './Links';
import { ActiveLink } from './Activelink';

export function ScrollLink({
	className,
	children,
	href,
	onClick,
	...restProps
}: Omit<HeroLinkProps, 'field'>) {
	const [activeSection, setActiveSection] = useState(false);
	const [inAnimation, setInAnimation] = useState<boolean>(false);
	const [targetEl, setTargetEl] = useState<HTMLElement | null>();
	const [clicked, setClicked] = useState(false);

	const observeSection = useCallback(
		(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			setActiveSection(entries[0].isIntersecting);
		},
		[],
	);

	useEffect(() => {
		const observer = new IntersectionObserver(observeSection, { threshold: 0.5 });

		if (href && typeof document !== 'undefined') {
			const targetId = href.replace(/.*\#/, '');
			setTargetEl(document.getElementById(targetId));
			if (targetEl && observer) observer.observe(targetEl);
		}
	}, [href, targetEl, observeSection]);

	const scrollHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		if (onClick) onClick(e);
		if (targetEl) {
			setClicked(true);
			targetEl.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.error('target element not found');
		}
	};

	return (
		<>
			<AnimatePresence
				onExitComplete={() => {
					setInAnimation(false);
					setClicked(false);
				}}>
				{activeSection && (
					<ActiveLink
						initial={!clicked}
						onAnimateStart={() => setInAnimation(true)}
						className={className}>
						{children}
					</ActiveLink>
				)}{' '}
			</AnimatePresence>
			{!activeSection && !inAnimation && (
				<Link
					{...restProps}
					href={href}
					onClick={scrollHandler}
					className={cn(
						'btn',
						`${styles.link}`,
						clicked && styles.clicked,
						className,
					)}>
					{children}
				</Link>
			)}
		</>
	);
}
