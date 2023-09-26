'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { NavigationDocumentData, Simplify } from '@/prismicio-types';
import { scrollTo } from '@/app/utils/scrollTo';
import { FilledLinkToWebField } from '@prismicio/client';
import { AnimatePresence, scroll } from 'framer-motion';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { menuSlide, slide } from '@/app/components/Navigation/Header/anim';
import { useWindowSize } from '@uidotdev/usehooks';
import Brand from '@/app/components/Navigation/Brand';
import Curve from '@/app/components/Navigation/Header/Curve';
import { MobileScreen } from '@/app/constants/screens';

import { LazyMotion, m } from 'framer-motion';
const animFeatures = () => import('@/app/animFeatures').then((res) => res.default);

const DefaultButton = dynamic(() =>
	import('@/app/components/UI/Buttons').then((comp) => comp.DefaultButton),
);

const MenuToggle = dynamic(() =>
	import('@/app/components/Navigation/Header/MenuToggle').then((comp) => comp.MenuToggle),
);

const HeroNavbarContent = dynamic(() =>
	import('@/app/components/Navigation/Header/NavMenu').then(
		(comp) => comp.HeroNavbarContent,
	),
);

type Props = {
	theme?: 'dark' | 'light';
	data: Simplify<NavigationDocumentData>;
};

export default function HeroNavbar({ data, theme = 'dark' }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	//const isMenuOpen = true;
	const [headerMinify, setHeaderMinify] = useState(true);
	const { width: windowWidth } = useWindowSize();

	useEffect(() => {
		scroll((progress) => {
			if (progress > 0.05) {
				setHeaderMinify(true);
			} else {
				isMenuOpen && windowWidth !== null && windowWidth >= MobileScreen
					? setIsMenuOpen(false)
					: null;
				setHeaderMinify(false);
			}
		});
	}, [isMenuOpen, windowWidth]);

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
		<LazyMotion features={animFeatures}>
			<AnimatePresence>
				{isMenuOpen && (
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsMenuOpen(false)}
						className="backdrop"></m.div>
				)}
			</AnimatePresence>
			<m.nav
				initial={false}
				animate={isMenuOpen ? 'open' : 'closed'}
				custom={height}
				className={`relative ${theme} text-foreground bg-transparent w-full h-14 lg:px-10 lg:pt-5 sticky top-0 z-50`}>
				<AnimatePresence mode="wait">
					{!headerMinify && (
						<m.div
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
								className="lg:justify-self-end hidden lg:block animate-appearance-in">
								{data.cta_label}
							</DefaultButton>
						</m.div>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{(headerMinify || (windowWidth !== null && windowWidth <= 1024)) && (
						<m.div
							initial={{ opacity: 0, x: 80 }}
							animate={{ opacity: 100, x: 0, transition: { delay: 0.3 } }}
							exit={{ x: 200 }}
							className="fixed lg:top-2 right-0 z-10 ">
							<MenuToggle
								className={`flex lg:px-5`}
								onClick={() => setIsMenuOpen((current) => !current)}
								isOpen={isMenuOpen}
							/>
						</m.div>
					)}
				</AnimatePresence>
				<AnimatePresence mode="wait">
					{isMenuOpen && (
						<m.div
							variants={menuSlide}
							initial="initial"
							animate="enter"
							exit="exit"
							className=" light bg-background h-screen flex flex-col justify-between gap-8 fixed right-0 top-0 w-full lg:w-1/3">
							<div
								onMouseDown={() => setIsMenuOpen(false)}
								className="justify-center h-full flex flex-col">
								<Brand
									color="dark"
									className={` ${
										isMenuOpen ? 'opacity-100' : 'opacity-0'
									} mx-auto mb-5 h-fit transition-opacity duration-1000 ease-out`}
								/>
								<HeroNavbarContent
									onNavigationClick={() =>
										setIsMenuOpen((current) => !current)
									}
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
							<Curve />
						</m.div>
					)}
				</AnimatePresence>
			</m.nav>
		</LazyMotion>
	);
}
