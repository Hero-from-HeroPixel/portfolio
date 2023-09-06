import React, { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	href: string;
	children: React.ReactNode;
}

export default function NavigationLink({ href, className, children, ...restProps }: Props) {
	return <Link {...restProps} href={href}></Link>;
}
