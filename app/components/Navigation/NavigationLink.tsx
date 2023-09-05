import React from 'react';
import { Link as UILink } from '@nextui-org/link';
import Link from 'next/link';

type Props = {
	className?: string;
	href: string;
	children: React.ReactNode;
};

export default function NavigationLink({ href, className, children, ...restProps }: Props) {
	return (
		<Link {...restProps} href={href}>
			<UILink>{children}</UILink>
		</Link>
	);
}
