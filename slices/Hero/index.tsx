import BoundWrapper from '@/app/components/UI/BoundWrapper';
import { SocialButton } from '@/app/components/UI/Buttons';
import Heading from '@/app/components/UI/Heading';
import HeroCTA from '@/app/components/elements/HeroCTA';
import { GithubIcon, LinkdnIcon, WhatsAppIcon } from '@/app/components/icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Content } from '@prismicio/client';
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react';

const components: JSXMapSerializer = {
	paragraph: ({ children }) => (
		<p className="text-start leading-tight tracking-tighter font-light lg:font-normal">
			{children}
		</p>
	),
	strong: ({ children }) => <strong className="text-primary">{children}</strong>,
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<BoundWrapper className="lg:items-center lg:justify-between justify-center items-center lg:flex-row h-screen lg:gap-0 gap-12 bg-transparent">
			<div className="lg:w-3/4 flex flex-col lg:flex-row lg:h-[65%]">
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
					{slice && (
						<span className="lg:absolute lg:top-4 2xl:top-8 lg:-right-20 2xl:-right-8 w-72 lg:w-56 2xl:w-72">
							<PrismicRichText
								components={components}
								field={slice.primary.introduction}
							/>
						</span>
					)}
				</div>
				<HeroCTA href={slice.primary.cta_link} title={slice.primary.cta_label} />
			</div>
			<div className="flex flex-col items-center lg:gap-4">
				<div className="w-full h-2 lg:w-2 lg:h-24 bg-accent"></div>
				<div className="flex lg:flex-col gap-2">
					<SocialButton href="https://github.com/Hero-from-HeroPixel">
						<GithubIcon />
					</SocialButton>
					<SocialButton href="mailto:dev@heropixel.co.za">
						<FontAwesomeIcon className="w-full h-full" icon={faEnvelope} />
					</SocialButton>
					<SocialButton href="tel:+27607326830">
						<WhatsAppIcon />
					</SocialButton>
					<SocialButton href="https://www.linkedin.com/in/jean-jacques-grobler/">
						<LinkdnIcon />
					</SocialButton>
				</div>
			</div>
		</BoundWrapper>
	);
};

export default Hero;
