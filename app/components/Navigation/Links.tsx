'use client';
import React, { useState } from 'react';
import { cn } from '@/app/utils/cn';
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';
import { Link } from '@nextui-org/link';
import { FilledLinkToWebField, LinkField } from '@prismicio/client';
import styles from '@/app/components/Navigation/links.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type ScrollLinkProps = {
	className?: string;
	children: React.ReactNode;
	sectionId?: string;
};

export function ScrollLink({ className, children, sectionId }: ScrollLinkProps) {
	const [activeSection, setActiveSection] = useState(false);
	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
	};

	return (
		<>
			{!activeSection && sectionId && (
				<Link
					as={NextLink}
					onClick={() => setActiveSection(true)}
					href={sectionId}
					className={cn(
						`btn ${styles.navigationLink}
				${styles.link}`,
						className,
					)}>
					{children}
				</Link>
			)}
			{activeSection && (
				<p
					className={cn(
						`btn ${styles.navigationLink}
				${styles.link}
				${activeSection && styles.active}`,
						className,
					)}>
					{children}
				</p>
			)}
			{!sectionId && <p className="text-danger">section not provided</p>}
		</>
	);
}

type LinkProps = {
	className?: string;
	children: React.ReactNode;
	href?: string;
	field?: LinkField;
	restProps?: PrismicNextLinkProps;
};
export function NavigationLink({ className, children, href, field, ...restProps }: LinkProps) {
	const [activeLink, setActiveLink] = useState(false);
	const currentPath = usePathname();

	if (field && field.link_type === 'Web') {
		const webLink = field as FilledLinkToWebField;

		if (webLink.url.includes('#')) {
			const targetId = webLink.url.replace(/.*\#/, '');
		} else {
			const targetPath = new URL(webLink.url).pathname;
			// //if (targetPath === currentPath) setActiveLink(true);
		}
	}

	if (href) {
		const targetId = href.replace(/.*\#/, '');
		//href === currentPath ? () => setActiveLink(true) : () => setActiveLink(false);
	}

	return (
		<>
			{!activeLink && field && (
				<PrismicNextLink
					{...restProps}
					onClick={() => setActiveLink(true)}
					field={field}
					className={cn(
						`btn ${styles.navigationLink}
						${styles.link}`,
						className,
					)}>
					{children}
				</PrismicNextLink>
			)}
			{!activeLink && href && (
				<Link
					as={NextLink}
					onClick={() => setActiveLink(true)}
					href={href}
					className={cn(
						`btn ${styles.navigationLink}
						${styles.link}`,
						className,
					)}>
					{children}
				</Link>
			)}
			{activeLink && (
				<p
					className={cn(
						`btn ${styles.navigationLink}
						${styles.link}
						${activeLink && styles.active}`,
						className,
					)}>
					{children}
				</p>
			)}
			{!href && !field && <p className="text-danger">link not provided</p>}
		</>
	);
}

export function ExternalLink({ className, children, href, field, ...restProps }: LinkProps) {
	return (
		<>
			{field && (
				<PrismicNextLink
					{...restProps}
					field={field}
					className={cn(`${styles.externalLink} ${styles.link}`, className)}>
					{children}
					<FontAwesomeIcon
						className="w-3 ms-2 text-primary text-opacity-75"
						icon={faArrowUpRightFromSquare}
					/>
				</PrismicNextLink>
			)}
			{href && (
				<Link
					as={NextLink}
					isExternal
					href={href}
					className={cn(`${styles.externalLink} ${styles.link}`, className)}>
					{children}
					<FontAwesomeIcon
						className="w-3 ms-2 text-primary text-opacity-75 "
						icon={faArrowUpRightFromSquare}
					/>
				</Link>
			)}
			{!href && !field && <p className="text-danger">link not provided</p>}
		</>
	);
}
