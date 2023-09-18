import React from 'react';
import { HeroModal } from '@/app/components/UI/HeroModal';
import { cn } from '@/app/utils/cn';
import { prismicClient } from '@/app/lib/clients';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';

type Props = {
	openButton?: {
		title?: string;
		className?: string;
	};
	modalTitle?: string;
	modalBody?: React.ReactNode;
};

const components: JSXMapSerializer = {
	paragraph: ({ children }) => <p className="sm light font-body_font">{children}</p>,
	strong: ({ children }) => (
		<strong className="sm light font-body_font text-primary">{children}</strong>
	),
};

export default async function CreditsModal({ openButton }: Props) {
	const { data: credits } = await prismicClient.getSingle('credits');
	const modalTitle = credits.heading as string;

	const modalBody = credits.credits.map(({ credit }, i) => (
		<PrismicRichText components={components} key={i} field={credit} />
	));
	return (
		<HeroModal
			OpenButton={{
				title: openButton?.title || 'credits',
				className: cn(
					'text-foreground mx-auto after:border-foreground',
					openButton?.className,
				),
			}}
			modalTitle={modalTitle}
			ModalBodyContent={modalBody}
			CloseProps={{ color: 'secondary' }}
		/>
	);
}
