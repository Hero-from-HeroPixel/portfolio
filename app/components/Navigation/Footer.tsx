import LogoIcon from '@/app/assets/Logo';
import { prismicClient } from '@/app/lib/clients';
import React from 'react';
import ModalWithButton from '@/app/components/UI/ModalWithButton';

type Props = { theme?: 'dark' | 'light' };

export default async function Footer({ theme = 'dark' }: Props) {
	const { data: footer } = await prismicClient.getSingle('footer');

	const modalTitle = 'Credits- Thanks to the following content creators';

	const ModalBodyContent = <div className=""></div>;

	return (
		<footer
			className={`text-foreground bg-background ${theme} w-full py-7 flex flex-col bg-accent`}>
			<div className="w-full lg:w-11/12 2xl:w-10/12 grid grid-cols-3 items-center mx-auto">
				<LogoIcon width={117} height={79} />
				<div className="flex gap-7 items-center mx-auto">
					<p className="sm">Lavida Living (Pty) Ltd &trade;</p>
					<ModalWithButton
						ModalBodyContent={ModalBodyContent}
						modalTitle="Credits - Thanks to the creators that inspire me"
						BtnProps={{
							children: 'Credits',
							variant: 'light',
							color: 'secondary',
						}}
					/>
				</div>
				<div className=""></div>
			</div>
		</footer>
	);
}
