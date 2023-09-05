import clsx from 'clsx';
import React from 'react';

type Props = {
	className?: string;
	children: React.ReactNode;
	theme?: 'dark' | 'light';
};

export default function Main({ children, className, theme = 'dark' }: Props) {
	return (
		<main
			className={clsx(`min-h-screen ${theme} text-foreground bg-background`, className)}>
			{children}
		</main>
	);
}
