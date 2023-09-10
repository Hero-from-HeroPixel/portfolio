import { cn } from '@/app/utils/cn';
import React from 'react';

type Props = {
	className?: string;
	children: React.ReactNode;
	theme?: 'dark' | 'light';
};

export default function Main({ children, className, theme = 'dark' }: Props) {
	return (
		<main className={cn(`min-h-screen ${theme} text-foreground z-40 relative`, className)}>
			{children}
		</main>
	);
}
