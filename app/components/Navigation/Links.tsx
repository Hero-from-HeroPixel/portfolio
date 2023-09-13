'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/app/utils/cn';
import { PrismicNextLink } from '@prismicio/next';
import { Link, LinkProps } from '@nextui-org/link';
import { FilledLinkToWebField, LinkField } from '@prismicio/client';
import styles from '@/app/components/Navigation/links.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, Variants, motion } from 'framer-motion';

interface HeroLinkProps extends LinkProps {
	className?: string;
	children: React.ReactNode;
	href?: string;
	field?: LinkField;
}

export function ActiveLink({
	children,
	onAnimateStart,
	initial = true,
	className,
}: {
	children: React.ReactNode;
	onAnimateStart?: () => void;
	initial?: boolean;
	className?: string;
}) {
	const underlineVariants: Variants = {
		start: {
			scaleX: 0.1,
		},
		end: {
			scaleX: 1,
		},
		exit: {
			scaleX: 0.1,
		},
	};
	return (
		<div className={cn(`${styles.active}`, className)}>
			<motion.p className="btn" transition={{ duration: 0.5 }}>
				{children}
			</motion.p>
			<motion.span
				onAnimationStart={onAnimateStart}
				initial={initial && 'start'}
				animate="end"
				exit="exit"
				variants={underlineVariants}
				transition={{ duration: 0.5, type: 'spring' }}
				className="bg-primary block h-1"></motion.span>
		</div>
	);
}

const scrollLinkCheck = (url: string) => {
	return url.includes('#');
};

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

export function NavigationLink({
	className,
	children,
	href,
	field,
	...restProps
}: HeroLinkProps) {
	const [activeLink, setActiveLink] = useState(false);
	const [isScrollLink, setIsScrollLink] = useState(false);
	const currentPath = usePathname();

	const linkFactory = useCallback(() => {
		if (field) {
			if (field && field.link_type === 'Web') {
				const webLink = field as FilledLinkToWebField;
				const targetPath = new URL(webLink.url).pathname;
				if (scrollLinkCheck(webLink.url) && currentPath === targetPath)
					setIsScrollLink(true);
				if (targetPath === currentPath && !scrollLinkCheck(webLink.url))
					setActiveLink(true);
			}
		}

		if (href) {
			if (scrollLinkCheck(href)) {
				setIsScrollLink(true);
			}

			href === currentPath && !scrollLinkCheck(href)
				? () => setActiveLink(true)
				: () => setActiveLink(false);
		}
	}, [field, href, currentPath]);

	useEffect(() => {
		linkFactory();
	}, [linkFactory]);

	if (!href && !field) return <p className="text-danger">link not provided</p>;

	if (activeLink) return <ActiveLink className={className}>{children}</ActiveLink>;

	if (isScrollLink) {
		let webLink;
		if (field?.link_type === 'Web') webLink = field as FilledLinkToWebField;

		return (
			//@ts-ignore Error on field type before execution. f
			<ScrollLink className={className} href={href || webLink?.url} {...restProps}>
				{children}
			</ScrollLink>
		);
	}

	return (
		<>
			{field && (
				<PrismicNextLink field={field} className={cn(`btn ${styles.link}`, className)}>
					{children}
				</PrismicNextLink>
			)}
			{href && (
				<Link
					{...restProps}
					as={NextLink}
					href={href}
					className={cn(`btn ${styles.link}`, className)}>
					{children}
				</Link>
			)}
		</>
	);
}

export function ExternalLink({
	className,
	children,
	href,
	field,
	...restProps
}: HeroLinkProps) {
	return (
		<>
			{field && (
				<PrismicNextLink
					field={field}
					className={cn(`${styles.externalLink} ${styles.link}`, className)}>
					{children}
					<FontAwesomeIcon
						className="w-3 ms-2 text-opacity-75"
						icon={faArrowUpRightFromSquare}
					/>
				</PrismicNextLink>
			)}
			{href && (
				<Link
					{...restProps}
					as={NextLink}
					isExternal
					href={href}
					className={cn(`${styles.externalLink} ${styles.link}`, className)}>
					{children}
					<FontAwesomeIcon
						className="w-3 ms-2 text-opacity-75 "
						icon={faArrowUpRightFromSquare}
					/>
				</Link>
			)}
			{!href && !field && <p className="text-danger">link not provided</p>}
		</>
	);
}
