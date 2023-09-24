import React from 'react';
import { cn } from '@/app/utils/cn';
import { PrismicNextLink } from '@prismicio/next';
import { Link, LinkProps } from '@nextui-org/link';
import { LinkField } from '@prismicio/client';
import styles from '@/app/components/Navigation/links.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';

interface HeroLinkProps extends LinkProps {
	className?: string;
	children: React.ReactNode;
	href?: string;
	field?: LinkField;
	appearance?: {
		icon: string;
	};
}

export function ExternalLink({
	className,
	children,
	href,
	field,
	appearance,
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
						className={cn(
							'w-3 ms-2 text-opacity-75 inline -translate-y-2',
							appearance?.icon,
						)}
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
						className={cn(
							'w-3 ms-2 text-opacity-75 inline -translate-y-2',
							appearance?.icon,
						)}
						icon={faArrowUpRightFromSquare}
					/>
				</Link>
			)}
			{!href && !field && <p className="text-danger">link not provided</p>}
		</>
	);
}
