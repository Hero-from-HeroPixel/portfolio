import React from 'react';
import BoundWrapper from '../UI/BoundWrapper';

type Props = {};

export default function Hero({}: Props) {
	return (
		<BoundWrapper className=" h-screen">
			<h1>
				hero <span>from</span> heropixel
			</h1>
		</BoundWrapper>
	);
}
