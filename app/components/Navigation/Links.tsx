import React, { AnchorHTMLAttributes } from 'react';
import { cn } from '@/app/utils/cn';
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';

type NavigationLinkProps = {
	className?: string;

	children: React.ReactNode;
	Prismic: PrismicNextLinkProps;
};

export function NavigationLink({
	className,
	children,
	Prismic,
	...restProps
}: NavigationLinkProps) {
	return (
		<PrismicNextLink {...restProps} field={Prismic.field} className={cn('', className)}>
			{children}
		</PrismicNextLink>
	);
}

type ExternalLinkProps = {
	className?: string;
	children: React.ReactNode;

	Prismic: PrismicNextLinkProps;
};

export function ExternalLink({
	className,
	children,
	Prismic,
	...restProps
}: NavigationLinkProps) {
	return (
		<PrismicNextLink {...restProps} field={Prismic.field} className={cn('', className)}>
			{children}
		</PrismicNextLink>
	);
}
