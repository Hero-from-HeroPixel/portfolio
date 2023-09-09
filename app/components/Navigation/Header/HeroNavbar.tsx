'use client';
import React, { useRef, useState } from 'react';
import LogoIcon from '@/app/assets/Logo';
import { NavigationDocumentData, Simplify } from '@/prismicio-types';
import { DefaultButton, LinkButton } from '@/app/components/UI/Buttons';
import { scrollTo } from '@/app/utils/scrollTo';
import { FilledLinkToWebField, GroupField } from '@prismicio/client';
import { MenuToggle } from '@/app/components/Navigation/Header/MenuToggle';
import { AnimatePresence, useCycle } from 'framer-motion';
import { motion } from 'framer-motion';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { menuSlide } from '@/app/components/Navigation/Header/anim';
import { HeroNavbarContent } from '@/app/components/Navigation/Header/NavMenu';
import Brand from './Brand';

type Props = {
	theme?: 'dark' | 'light';
	data: Simplify<NavigationDocumentData>;
};

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
		<motion.nav
			initial={false}
			animate={isMenuOpen ? 'open' : 'closed'}
			custom={height}
			ref={menuRef}
			className={`relative ${theme} text-foreground bg-background w-full lg:px-10 lg:pt-5 sticky top-0 `}>
			<div className="mx-auto 2xl:w-10/12 lg:w-full lg:grid lg:grid-cols-3 items-center">
				<Brand
					color="light"
					className={`${
						isMenuOpen ? 'opacity-0' : 'opacity-100'
					} absolute top-3 left-5 z-10 h-fit transition-opacity duration-1000 ease-out lg:block lg:opacity-100 lg:static`}
				/>
				<HeroNavbarContent as="HorizontalMenu" links={data.navigation} />
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
				<AnimatePresence mode="wait">
					{isMenuOpen && (
						<motion.div
							variants={menuSlide}
							initial="initial"
							animate="enter"
							exit="exit"
							className="lg:hidden light bg-background h-screen flex flex-col justify-between gap-8">
							<div className="justify-center h-full flex flex-col">
								<Brand
									color="dark"
									className={` ${
										isMenuOpen ? 'opacity-100' : 'opacity-0'
									} mx-auto mb-5 h-fit transition-opacity duration-1000 ease-out`}
								/>
								<HeroNavbarContent
									cta={
										<DefaultButton
											onClick={ctaHandler}
											className="lg:justify-self-end bg-foreground text-background w-10/12 max-w-none mx-auto">
											{data.cta_label}
										</DefaultButton>
									}
									as="VerticalMenu"
									className=""
									links={data.navigation}></HeroNavbarContent>
							</div>
							<LinkButton className="text-foreground mx-auto mb-5 lg:hidden">
								credits
							</LinkButton>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}
