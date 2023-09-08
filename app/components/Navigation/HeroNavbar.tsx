'use client';
import React, { useState } from 'react';
import { NavigationLink } from '@/app/components/Navigation/Links';
import LogoIcon from '@/app/assets/Logo';
import {
	NavigationDocumentData,
	NavigationDocumentDataNavigationItem,
	Simplify,
} from '@/prismicio-types';
import { DefaultButton } from '../UI/Buttons';
import { scrollTo } from '@/app/utils/scrollTo';
import { FilledLinkToWebField, GroupField } from '@prismicio/client';
import { cn } from '@/app/utils/cn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
		<ul
			className={cn(
				'justify-between gap-10',
				as === 'MobileMenu' && 'flex flex-col justify-center lg:hidden',
				as === 'DesktopMenu' && 'lg:flex justify-between hidden',
				className,
			)}>
			{links.map((link, i) => (
				<li key={link + i.toString()}>
					<NavigationLink className="text-foreground after:w-0" field={link.url}>
						{link.label}
					</NavigationLink>
				</li>
			))}
			{cta}
		</ul>
	);
}

export default function HeroNavbar({ data, theme = 'dark' }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const ctaHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (data.cta_link.link_type === 'Web') {
			const webLink = data.cta_link as FilledLinkToWebField;
			scrollTo({ href: webLink.url }, { behavior: 'smooth' });
		} else {
			console.error('CTA link is invalid');
		}
	};
	return (
		<nav
			className={`relative ${theme} text-foreground bg-background w-full lg:px-10 lg:pt-5 sticky top-0 `}>
			<div className="mx-auto 2xl:w-10/12 lg:w-full lg:grid lg:grid-cols-3 items-center">
				<LogoIcon width={117} height={79} className="w-20 hidden lg:block" />

				<HeroNavbarContent as="DesktopMenu" links={data.navigation} />

				<DefaultButton
					onClick={ctaHandler}
					className="lg:justify-self-end hidden lg:block">
					{data.cta_label}
				</DefaultButton>

				<DefaultButton
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="lg:hidden p-5 min-w-0 absolute top-5 right-5">
					<FontAwesomeIcon icon={faBars} />
				</DefaultButton>
				{isMenuOpen && (
					<HeroNavbarContent
						cta={
							<DefaultButton
								onClick={ctaHandler}
								className="lg:justify-self-end bg-foreground text-background">
								{data.cta_label}
							</DefaultButton>
						}
						as="MobileMenu"
						className="light bg-background h-screen"
						links={data.navigation}
					/>
				)}
			</div>
		</nav>
	);
}
