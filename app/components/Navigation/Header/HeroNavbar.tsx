'use client';
import React, { useState } from 'react';
import { NavigationDocumentData, Simplify } from '@/prismicio-types';
import { DefaultButton, LinkButton } from '@/app/components/UI/Buttons';
import { scrollTo } from '@/app/utils/scrollTo';
import { FilledLinkToWebField } from '@prismicio/client';
import { MenuToggle } from '@/app/components/Navigation/Header/MenuToggle';
import { AnimatePresence, useCycle, scroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { menuSlide, slide } from '@/app/components/Navigation/Header/anim';
import { HeroNavbarContent } from '@/app/components/Navigation/Header/NavMenu';
import { useWindowSize } from '@uidotdev/usehooks';
import Brand from '@/app/components/Navigation/Header/Brand';
import Curve from '@/app/components/Navigation/Header/curve';

type Props = {
	theme?: 'dark' | 'light';
	data: Simplify<NavigationDocumentData>;
};

export default function HeroNavbar({ data, theme = 'dark' }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [headerMinify, setHeaderMinify] = useState(true);
	const { width: windowWidth } = useWindowSize();

	scroll((progress) => (progress > 0.1 ? setHeaderMinify(true) : setHeaderMinify(false)));

	const ctaHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		setIsMenuOpen(false);
		if (data.cta_link.link_type === 'Web') {
			const webLink = data.cta_link as FilledLinkToWebField;
			scrollTo({ href: webLink.url }, { behavior: 'smooth' });
		} else {
			console.error('CTA link is invalid');
		}
	};

	return (
		<motion.nav
			onMouseLeave={() => setIsMenuOpen(false)}
			onMouseDown={() => setIsMenuOpen(false)}
			initial={false}
			animate={isMenuOpen ? 'open' : 'closed'}
			custom={height}
			className={`relative ${theme} text-foreground bg-background w-full lg:px-10 lg:pt-5 sticky top-0 `}>
			<AnimatePresence mode="wait">
				{!headerMinify && (
					<motion.div
						variants={slide.horizontal}
						exit="exit"
						className={`mx-auto 2xl:w-10/12 lg:w-full lg:grid lg:grid-cols-3 items-center`}>
						<Brand
							color="light"
							className={`${
								isMenuOpen ? 'opacity-0' : 'opacity-100'
							} absolute top-3 left-5 z-10 h-fit transition-opacity duration-1000 ease-out lg:block lg:opacity-100 lg:static`}
						/>
						<HeroNavbarContent as="HorizontalMenu" links={data.navigation} />
						<DefaultButton
							onClick={ctaHandler}
							className="lg:justify-self-end hidden lg:block animate-appearance-in delay-700">
							{data.cta_label}
						</DefaultButton>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{(headerMinify || (windowWidth !== null && windowWidth <= 1024)) && (
					<motion.div
						initial={{ opacity: 0, x: 80 }}
						animate={{ opacity: 100, x: 0, transition: { delay: 0.5 } }}
						exit={{ x: 200 }}
						className="fixed top-1 right-5 z-10 ">
						<MenuToggle
							className={`flex bg-default `}
							onClick={() => setIsMenuOpen((current) => !current)}
							isOpen={isMenuOpen}
						/>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence mode="wait">
				{isMenuOpen && (
					<motion.div
						variants={menuSlide}
						initial="initial"
						animate="enter"
						exit="exit"
						className=" light bg-background h-screen flex flex-col justify-between gap-8 fixed right-0 top-0 w-full lg:w-1/3">
						<div className="justify-center h-full flex flex-col">
							<Brand
								color="dark"
								className={` ${
									isMenuOpen ? 'opacity-100' : 'opacity-0'
								} mx-auto mb-5 h-fit transition-opacity duration-1000 ease-out`}
							/>
							<HeroNavbarContent
								onNavigationClick={() => setIsMenuOpen((current) => !current)}
								cta={
									<DefaultButton
										onClick={ctaHandler}
										className="lg:justify-self-end bg-foreground text-background hover:bg-background hover:text-foreground hover:border-2 border-foreground w-10/12 max-w-none mx-auto">
										{data.cta_label}
									</DefaultButton>
								}
								as="VerticalMenu"
								className="w-3/4 mx-auto"
								links={data.navigation}></HeroNavbarContent>
						</div>
						<LinkButton className="text-foreground mx-auto mb-5 after:border-foreground">
							credits
						</LinkButton>
						<Curve />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}