import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<BoundWrapper className=" h-screen">
			<Heading>
				hero <span>from</span> heropixels
			</Heading>
		</BoundWrapper>
	);
};

export default Hero;
