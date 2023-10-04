import BoundWrapper from '@/app/components/UI/BoundWrapper';
import dynamic from 'next/dynamic';
import { SocialButton } from '@/app/components/UI/Buttons';
import HeroText from '@/app/components/elements/Hero/HeroText';
import { GithubIcon, LinkdnIcon, WhatsAppIcon } from '@/app/components/icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Splash from '@/app/Splash';
const HeroCTA = dynamic(() => import('@/app/components/elements/Hero/HeroCTA'));

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	slice.primary.introduction;

	const line1 = 'hero';
	const span = 'from';
	const line2 = 'heropixel';
	return (
		<BoundWrapper
			id={slice.primary.section_id}
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="lg:items-center lg:justify-between justify-center items-center lg:flex-row h-screen lg:gap-0 gap-12 bg-transparent">
			<div className="lg:w-3/4 flex flex-col lg:flex-row lg:h-[60%]">
				<HeroText
					executeDelay={2}
					introduction={slice.primary.introduction}
					line1={line1}
					line2={line2}
					span={span}
				/>
				<HeroCTA href={slice.primary.cta_link} title={slice.primary.cta_label} />
			</div>
			<div className="flex opacity-0 flex-col items-center gap-1 lg:gap-4 animate-fade-in">
				<div className="w-full h-2 lg:w-2 lg:h-24 bg-accent"></div>
				<div className="flex lg:flex-col gap-2">
					<SocialButton
						ariaLabel="Github Link"
						href="https://github.com/Hero-from-HeroPixel">
						<GithubIcon />
					</SocialButton>
					<SocialButton ariaLabel="Email Link" href="mailto:dev@heropixel.co.za">
						<FontAwesomeIcon className="w-full h-full" icon={faEnvelope} />
					</SocialButton>
					<SocialButton ariaLabel="Phone Link" href="tel:+27607326830">
						<WhatsAppIcon />
					</SocialButton>
					<SocialButton
						ariaLabel="Linkedin Link"
						href="https://www.linkedin.com/in/jean-jacques-grobler/">
						<LinkdnIcon />
					</SocialButton>
				</div>
			</div>
			{/* <Splash /> */}
		</BoundWrapper>
	);
};

export default Hero;
