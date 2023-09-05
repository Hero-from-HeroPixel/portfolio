import React, { AnchorHTMLAttributes } from 'react';
import { Link as UILink } from '@nextui-org/link';
import Link from 'next/link';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	href: string;
	children: React.ReactNode;
}

export default function NavigationLink({ href, className, children, ...restProps }: Props) {
	return (
		<Link {...restProps} href={href}>
			<UILink className="">{children}</UILink>
		</Link>
	);
}
