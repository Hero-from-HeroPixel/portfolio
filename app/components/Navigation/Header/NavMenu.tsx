import { cn } from '@/app/utils/cn';
import { NavigationLink } from '../Links';
import { slide } from '@/app/components/Navigation/Header/anim';
import { motion } from 'framer-motion';
import { GroupField } from '@prismicio/client';
import { NavigationDocumentDataNavigationItem, Simplify } from '@/prismicio-types';
import { MouseEventHandler, useState } from 'react';

interface NavbarContentProps {
	as: 'VerticalMenu' | 'HorizontalMenu';
	cta?: React.ReactNode;
	links: GroupField<Simplify<NavigationDocumentDataNavigationItem>>;
	className?: string;
	children?: React.ReactNode;
	onNavigationClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function HeroNavbarContent({
	cta,
	as: menuLayout,
	links,
	className,
	children,
	onNavigationClick,
}: NavbarContentProps) {
	let animDirection: 'vertical' | 'horizontal' = 'vertical';

	if (menuLayout === 'HorizontalMenu') animDirection = 'horizontal';

	return (
		<motion.ul
			className={cn(
				'justify-between gap-10',
				menuLayout === 'VerticalMenu' && 'flex flex-col justify-center ',
				menuLayout === 'HorizontalMenu' && 'lg:flex justify-between hidden',
				className,
			)}>
			{links.map((link, i) => (
				<motion.li
					custom={i}
					variants={slide[animDirection]}
					initial="initial"
					animate="enter"
					exit="exit"
					key={link + i.toString()}
					className={cn(menuLayout === 'VerticalMenu' && 'w-3/4 mx-auto')}>
					<NavigationLink
						onClick={onNavigationClick}
						className={cn(
							'text-foreground after:w-0',
							menuLayout === 'VerticalMenu' && 'text-3xl',
						)}
						field={link.url}>
						{link.label}
					</NavigationLink>
				</motion.li>
			))}
			<motion.div
				custom={links.length}
				variants={slide[animDirection]}
				initial="initial"
				animate="enter"
				exit="exit"
				className="flex justify-center">
				{cta}
			</motion.div>

			{children}
		</motion.ul>
	);
}
