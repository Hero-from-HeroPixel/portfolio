import { prismicClient } from '@/app/lib/clients';
import React from 'react';
import Brand from '@/app/components/Navigation/Brand';
import { NavigationLink } from './Links';
import CreditsModal from '@/app/components/Navigation/CreditsModal';

type Props = { theme?: 'dark' | 'light' };

export default async function Footer({ theme = 'dark' }: Props) {
	const { data: footer } = await prismicClient.getSingle('footer');

	return (
		<footer
			className={`text-foreground bg-accent ${theme} w-full py-7 flex flex-col relative z-40`}>
			<div className="w-full lg:w-11/12 2xl:w-10/12 lg:grid flex flex-col gap-4 lg:grid-cols-3 items-center mx-auto">
				<Brand color="light" />
				<div className="flex gap-7 items-center mx-auto order-3 lg:order-none w-11/12 lg:w-fit justify-end">
					<p className="sm font-body_font">HeroPixel &trade;</p>
					<CreditsModal />
				</div>
				<div className="flex flex-col w-11/12">
					<p>Quick Links</p>
					<div className="flex w-full justify-between px-1 mt-1">
						{footer.quick_links.map((link, i) => (
							<NavigationLink
								tabIndex={i}
								className="font-light text-foreground after:w-0"
								key={link.label}
								field={link.url}>
								{link.label}
							</NavigationLink>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
