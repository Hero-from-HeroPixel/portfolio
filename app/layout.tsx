import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, League_Spartan } from 'next/font/google';
import clsx from 'clsx';
import { Providers } from './providers/providers';
import Main from '@/app/components/UI/Main';

const bebas_neue = Bebas_Neue({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-bebas-neue',
	preload: true,
	display: 'swap',
});
const league_spartan = League_Spartan({
	subsets: ['latin'],
	variable: '--font-league-spartan',
	preload: true,
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={clsx(bebas_neue.variable, league_spartan.variable)}>
				<Providers>
					<Main>{children}</Main>
				</Providers>
			</body>
		</html>
	);
}
