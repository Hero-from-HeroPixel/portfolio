import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Slider from './Slider';

type Props = {
	id?: string;
};

export default function Projects({ id }: Props) {
	return (
		<section className="w-screen" id={id}>
			<Slider />
			<BoundWrapper as="div" id={id}>
				Slider
			</BoundWrapper>
		</section>
	);
}
