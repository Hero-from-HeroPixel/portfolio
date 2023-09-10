import React from 'react';
import { HeroModal } from '@/app/components/UI/HeroModal';

type Props = {};

export default function CreditsModal({}: Props) {
	const modalTitle = 'Credits- Thanks to the following content creators';

	const ModalBodyContent = <div className=""></div>;
	return (
		<HeroModal
			OpenButton={{
				title: 'credits',
				className: 'text-foreground mx-auto mb-5 after:border-foreground',
			}}
			modalTitle={modalTitle}
			ModalBodyContent={ModalBodyContent}
			CloseProps={{ color: 'secondary' }}
		/>
	);
}
