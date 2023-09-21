import * as React from 'react';
import { motion } from 'framer-motion';
import { DefaultButton } from '@/app/components/UI/Buttons';
import { cn } from '@/app/utils/cn';

const dark = 'hsl(0, 0%, 18%)';
const light = 'hsl(0, 0%, 95%)';
const Path = ({ className, color = 'dark', ...restProps }: any) => (
	<motion.path
		className={className}
		strokeWidth="3"
		stroke={color === 'dark' ? dark : light}
		strokeLinecap="round"
		{...restProps}
	/>
);

interface MenuToggleProps {
	className?: string;
	children?: React.ReactNode;
	isOpen: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MenuToggle = ({ isOpen, onClick, children, className }: MenuToggleProps) => (
	<DefaultButton
		onClick={onClick}
		aria-label={isOpen ? 'Close menu' : 'Open menu'}
		className={cn(
			` p-5 min-w-0 absolute hover:stroke-background top-5 right-5 lg:top-10 lg:right-10 stroke-foreground`,
			isOpen ? 'bg-transparent' : 'bg-default',
			className,
		)}>
		<svg
			className={`stroke-inherit ${isOpen ? 'stroke-background' : 'stroke-foreground'}`}
			width="23"
			height="23"
			viewBox="0 0 23 23">
			<Path
				className="stroke-inherit"
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' },
				}}
			/>
			<Path
				className="stroke-inherit"
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				className="stroke-inherit"
				color={isOpen ? 'dark' : 'light'}
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' },
				}}
			/>
		</svg>
		{children}
	</DefaultButton>
);
