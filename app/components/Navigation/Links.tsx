'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/app/utils/cn';
import { PrismicNextLink } from '@prismicio/next';
import { Link, LinkProps } from '@nextui-org/link';
import { FilledLinkToWebField, LinkField } from '@prismicio/client';
import styles from '@/app/components/Navigation/links.module.css';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { ActiveLink } from './Activelink';
import { ScrollLink } from './ScrollLink';

export interface HeroLinkProps extends LinkProps {
	className?: string;
	children: React.ReactNode;
	href?: string;
	field?: LinkField;
}

const scrollLinkCheck = (url: string) => {
	return url.includes('#');
};

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
