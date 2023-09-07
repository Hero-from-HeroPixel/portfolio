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
		const targetPath = new URL(webLink.url).pathname;
		console.log('prismic field', targetPath === currentPath);
		//targetPath === currentPath ? setActiveLink(true) : setActiveLink(false);
	}

	if (href) {
		console.log('normal link', href === currentPath);
		//href === currentPath ? setActiveLink(true) : setActiveLink(false);
	}
	return (
		<>
			{!activeLink && field && (
				<PrismicNextLink
					{...restProps}
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
