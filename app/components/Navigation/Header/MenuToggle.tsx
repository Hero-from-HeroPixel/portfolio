import * as React from 'react';
import { motion } from 'framer-motion';
import { DefaultButton } from '@/app/components/UI/Buttons';
import { cn } from '@/app/utils/cn';

const Path = (props: any) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 18%)"
		strokeLinecap="round"
		{...props}
	/>
);

interface MenuToggleProps {
	children?: React.ReactNode;
	isOpen: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MenuToggle = ({ isOpen, onClick, children }: MenuToggleProps) => (
	<DefaultButton
		onClick={onClick}
		aria-label={isOpen ? 'Close menu' : 'Open menu'}
		className={cn(
			`lg:hidden p-5 min-w-0 absolute top-5 right-5`,
			isOpen ? 'bg-transparent text-background' : 'bg-secondary text-foreground',
		)}>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' },
				}}
			/>
		</svg>
		{children}
	</DefaultButton>
);
