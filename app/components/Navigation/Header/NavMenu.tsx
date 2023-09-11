import { cn } from '@/app/utils/cn';
import { NavigationLink } from '../Links';
import { slide } from '@/app/components/Navigation/Header/anim';
import { motion } from 'framer-motion';
import { GroupField } from '@prismicio/client';
import { NavigationDocumentDataNavigationItem, Simplify } from '@/prismicio-types';
import { MouseEventHandler } from 'react';
import styles from '@/app/components/Navigation/Header/navMenu.module.css';

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
				' justify-between gap-10',
				menuLayout === 'VerticalMenu' && 'flex flex-col justify-center ',
				menuLayout === 'HorizontalMenu' && 'lg:flex justify-between hidden',
				styles.navItems,
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
					className={cn(
						menuLayout === 'VerticalMenu' && 'w-3/4 mx-auto',
						styles.navItem,
					)}>
					<NavigationLink
						onClick={onNavigationClick}
						className="text-foreground after:w-0 hover:text-opacity-100"
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
			<div className="" id="background-pattern"></div>
			{children}
		</motion.ul>
	);
}
