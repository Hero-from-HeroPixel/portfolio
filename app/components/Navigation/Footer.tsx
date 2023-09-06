import LogoIcon from '@/app/assets/Logo';
import { prismicClient } from '@/app/lib/clients';
import React from 'react';
import ModalWithButton from '@/app/components/UI/ModalWithButton';

type Props = { theme?: 'dark' | 'light' };

export default async function Footer({ theme = 'dark' }: Props) {
	const { data: footer } = await prismicClient.getSingle('footer');
	return (
		<footer className={`text-foreground bg-background ${theme} w-full py-7 flex flex-col`}>
			<div className="w-full lg:w-11/12 2xl:w-10/12 grid grid-cols-3">
				<LogoIcon />
				<div className="flex">
					<p className="sm">Lavida Living (Pty) Ltd &trade;</p>
				</div>
				<div className=""></div>
			</div>
		</footer>
	);
}
