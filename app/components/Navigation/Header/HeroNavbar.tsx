'use client';
import React, { useRef, useState } from 'react';
import { NavigationLink } from '@/app/components/Navigation/Links';
import LogoIcon from '@/app/assets/Logo';
import {
	NavigationDocumentData,
	NavigationDocumentDataNavigationItem,
	Simplify,
} from '@/prismicio-types';
import { DefaultButton } from '@/app/components/UI/Buttons';
import { scrollTo } from '@/app/utils/scrollTo';
import { FilledLinkToWebField, GroupField } from '@prismicio/client';
import { cn } from '@/app/utils/cn';
import { MenuToggle } from './MenuToggle';
import { AnimatePresence, useCycle } from 'framer-motion';
import { motion } from 'framer-motion';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { menuSlide } from './anim';

type Props = {
	theme?: 'dark' | 'light';
	data: Simplify<NavigationDocumentData>;
};

interface NavBarContentProps {
	as: 'MobileMenu' | 'DesktopMenu';
	cta?: React.ReactNode;
	links: GroupField<Simplify<NavigationDocumentDataNavigationItem>>;
	className?: string;
}

export function HeroNavbarContent({ cta, as, links, className }: NavBarContentProps) {
	return (
		<motion.ul
			variants={menuSlide}
			initial={'initial'}
			animate={'enter'}
			exit={'exit'}
			className={cn(
				'justify-between gap-10',
				as === 'MobileMenu' && 'flex flex-col justify-center lg:hidden ',
				as === 'DesktopMenu' && 'lg:flex justify-between hidden',
				className,
			)}>
			{links.map((link, i) => (
				<li
					key={link + i.toString()}
					className={cn(as === 'MobileMenu' && 'w-3/4 mx-auto')}>
					<NavigationLink
						className={cn(
							'text-foreground after:w-0',
							as === 'MobileMenu' && 'text-3xl',
						)}
						field={link.url}>
						{link.label}
					</NavigationLink>
				</li>
			))}
			{cta}
		</motion.ul>
	);
}

export default function HeroNavbar({ data, theme = 'dark' }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useCycle(false, true);
	const menuRef = useRef(null);

	const ctaHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (data.cta_link.link_type === 'Web') {
			const webLink = data.cta_link as FilledLinkToWebField;
			scrollTo({ href: webLink.url }, { behavior: 'smooth' });
		} else {
			console.error('CTA link is invalid');
		}
	};
	return (
		<AnimatePresence mode="wait">
			<motion.nav
				initial={false}
				animate={isMenuOpen ? 'open' : 'closed'}
				custom={height}
				ref={menuRef}
				className={`relative ${theme} text-foreground bg-background w-full lg:px-10 lg:pt-5 sticky top-0 `}>
				<div className="mx-auto 2xl:w-10/12 lg:w-full lg:grid lg:grid-cols-3 items-center">
					<LogoIcon width={117} height={79} className="w-20 hidden lg:block" />

					<HeroNavbarContent as="DesktopMenu" links={data.navigation} />

					<DefaultButton
						onClick={ctaHandler}
						className="lg:justify-self-end hidden lg:block">
						{data.cta_label}
					</DefaultButton>
					<MenuToggle
						className="z-10"
						onClick={() => setIsMenuOpen()}
						isOpen={isMenuOpen}
					/>
					{isMenuOpen && (
						<HeroNavbarContent
							cta={
								<DefaultButton
									onClick={ctaHandler}
									className="lg:justify-self-end bg-foreground text-background w-10/12 max-w-none mx-auto">
									{data.cta_label}
								</DefaultButton>
							}
							as="MobileMenu"
							className="light bg-background h-screen"
							links={data.navigation}
						/>
					)}
				</div>
			</motion.nav>
		</AnimatePresence>
	);
}
