import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import { prismicClient } from '@/app/lib/clients';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { SocialButton } from '@/app/components/UI/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LinkdnIcon, GithubIcon, WhatsAppIcon } from '../../icons';
import HeroCTA from '@/app/components/elements/Hero/HeroCTA';
import { GITHUB_LINK, LINKDN_LINK, MAIL_LINK, PHONE_LINK } from '@/app/constants/Social';

const components: JSXMapSerializer = {
	paragraph: ({ children }) => (
		<p className="text-start leading-tight tracking-tighter font-light lg:font-normal">
			{children}
		</p>
	),
	strong: ({ children }) => <strong className="text-primary">{children}</strong>,
};

type Props = {
	id?: string;
};

export default async function Hero({ id }: Props) {
	let hero;
	try {
		hero = (await prismicClient.getSingle('hero_introduction')).data;
	} catch {
		console.error('introduction not provided');
	}
	return (
		<BoundWrapper
			id={id}
			className="lg:items-center lg:justify-between justify-center items-center lg:flex-row h-screen lg:gap-0 gap-12">
			<div className="lg:w-3/4 flex flex-col lg:flex-row lg:h-[60%]">
				<div className="relative w-fit lg:h-3/4 flex flex-col justify-center items-center lg:justify-start gap-12 lg:gap-0">
					<Heading className="relative leading-[80%] lg:leading-[80%] tracking-[-0.37rem] lg:tracking-[-0.95rem]">
						hero{' '}
						<span className="align-middle lg:absolute lg:top-10 2xl:top-16 mb-5 lg:border-2 border font-normal rounded-full border-white text-2xl lg:text-4xl lg:py-2 lg:px-6 px-4 py-2 lg:-rotate-90 tracking-normal">
							from
						</span>{' '}
						<br />
						heropixel
						<span className="absolute right-0 top-full 2xl:w-80 text-2xl lg:text-4xl 2xl:text-6xl tracking-widest lg:tracking-[0.4rem] font-light lg:font-normal leading-none">
							full stack <br />
							developer
						</span>
					</Heading>
					{hero && (
						<span className="lg:absolute lg:top-4 2xl:top-8 lg:-right-20 2xl:-right-8 w-72 lg:w-56 2xl:w-72">
							<PrismicRichText
								components={components}
								field={hero?.hero_introduction}
							/>
						</span>
					)}
				</div>
				<HeroCTA targetId={'education'} />
			</div>
			<div className="flex flex-col items-center gap-2 lg:gap-4">
				<div className="w-full h-2 lg:w-2 lg:h-24 bg-accent"></div>
				<div className="flex lg:flex-col gap-2">
					<SocialButton href={GITHUB_LINK}>
						<GithubIcon />
					</SocialButton>
					<SocialButton href={MAIL_LINK}>
						<FontAwesomeIcon className="w-full h-full" icon={faEnvelope} />
					</SocialButton>
					<SocialButton href={PHONE_LINK}>
						<WhatsAppIcon />
					</SocialButton>
					<SocialButton href={LINKDN_LINK}>
						<LinkdnIcon />
					</SocialButton>
				</div>
			</div>
		</BoundWrapper>
	);
}
