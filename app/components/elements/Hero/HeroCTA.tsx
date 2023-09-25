'use client';
import React from 'react';
import { PrimaryButton } from '@/app/components/UI/Buttons';
import { scrollTo } from '@/app/utils/scrollTo';
import { FilledLinkToWebField, LinkField } from '@prismicio/client';
type Props = {
	title?: string | null;
	href?: LinkField | null;
	targetId?: string | null;
};

export default function HeroCTA({ title, href, targetId }: Props) {
	const clickHandler = () => {
		if (href && href.link_type === 'Web') {
			const webLink = href as FilledLinkToWebField;
			scrollTo({ href: webLink.url }, { behavior: 'smooth' });
		} else if (targetId) {
			scrollTo({ targetId }, { behavior: 'smooth' });
		} else {
			console.error('target not provided');
		}
	};

	return (
		<PrimaryButton
			onClick={clickHandler}
			className="mt-20 lg:mt-0 self-end opacity-0 animate-fade-in ">
			{title || 'Learn more about me'}
		</PrimaryButton>
	);
}
