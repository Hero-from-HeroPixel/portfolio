'use client';
import React from 'react';
import { PrimaryButton } from '@/app/components/UI/Buttons';
import { scrollTo } from '@/app/utils/scrollTo';
type Props = {};

export default function HeroCTA({}: Props) {
	const clickHandler = () => scrollTo({ targetId: 'education' }, { behavior: 'smooth' });

	return (
		<PrimaryButton onClick={clickHandler} className="mt-20 lg:mt-0 self-end">
			Learn more about me.
		</PrimaryButton>
	);
}
