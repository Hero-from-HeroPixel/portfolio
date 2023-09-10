import React from 'react';
import { HeroModal } from '@/app/components/UI/HeroModal';
import { cn } from '@/app/utils/cn';

type Props = {
	openButton?: {
		title?: string;
		className?: string;
	};
};

export default function CreditsModal({ openButton }: Props) {
	const modalTitle = 'Credits- Thanks to the following content creators';

	const ModalBodyContent = <div className=""></div>;
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
			ModalBodyContent={ModalBodyContent}
			CloseProps={{ color: 'secondary' }}
		/>
	);
}
