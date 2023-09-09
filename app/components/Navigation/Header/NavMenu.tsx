import { cn } from '@/app/utils/cn';
import { NavigationLink } from '../Links';
import { slide } from '@/app/components/Navigation/Header/anim';
import { motion } from 'framer-motion';
import { GroupField } from '@prismicio/client';
import { NavigationDocumentDataNavigationItem, Simplify } from '@/prismicio-types';

interface NavbarContentProps {
	as: 'VerticalMenu' | 'HorizontalMenu';
	cta?: React.ReactNode;
	links: GroupField<Simplify<NavigationDocumentDataNavigationItem>>;
	className?: string;
	children?: React.ReactNode;
}

export function HeroNavbarContent({
	cta,
	as,
	links,
	className,
	children,
}: NavbarContentProps) {
	return (
		<motion.ul
			className={cn(
				'justify-between gap-10',
				as === 'VerticalMenu' && 'flex flex-col justify-center lg:hidden ',
				as === 'HorizontalMenu' && 'lg:flex justify-between hidden',
				className,
			)}>
			{links.map((link, i) => (
				<motion.li
					custom={i}
					variants={slide}
					initial="initial"
					animate="enter"
					exit="exit"
					key={link + i.toString()}
					className={cn(as === 'VerticalMenu' && 'w-3/4 mx-auto')}>
					<NavigationLink
						className={cn(
							'text-foreground after:w-0',
							as === 'VerticalMenu' && 'text-3xl',
						)}
						field={link.url}>
						{link.label}
					</NavigationLink>
				</motion.li>
			))}
			<motion.div
				custom={links.length}
				variants={slide}
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
