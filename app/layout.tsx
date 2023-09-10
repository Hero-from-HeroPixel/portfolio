import './globals.css';
import { Bebas_Neue, League_Spartan } from 'next/font/google';
import clsx from 'clsx';
import { Providers } from '@/app/providers/providers';
import Main from '@/app/components/UI/Main';
import { prismicClient } from '@/app/lib/clients';
import { Metadata } from 'next';
import Header from '@/app/components/Navigation/Header/Header';
import Footer from '@/app/components/Navigation/Footer';
import Blob from '@/app/components/elements/Blob';

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

export async function generateMetadata(): Promise<Metadata> {
	try {
		const { data: settings } = await prismicClient.getSingle('settings');
		return {
			title: settings.site_title || 'HeroPixel',
			description: settings.meta_description || 'Developer portfolio of JJ Grobler',
			colorScheme: 'dark',
			openGraph: {
				title: settings.open_graph[0]?.title || 'HeroPixel',
				description:
					settings.open_graph[0]?.description || 'Developer portfolio of JJ Grobler',
				url: settings.open_graph[0]?.url || 'https://heropixel.co.za',
				siteName: settings.open_graph[0]?.site_name || 'HeroPixel',
				images: [settings.open_graph[0]?.og_image.url || ''],
				locale: settings.open_graph[0]?.locale || 'en_ZA',
				type: settings.open_graph[0]?.type || 'website',
			},
			twitter: {
				title: settings.twitter_x[0]?.title || 'HeroPixel',
				description:
					settings.twitter_x[0]?.description || 'Developer portfolio of JJ Grobler',
				images: [settings.twitter_x[0]?.twitter_x_image.url || ''],
			},
		};
	} catch (error) {
		return {
			title: 'HeroPixel',
			description: 'Developer portfolio of JJ Grobler',
		};
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={clsx(bebas_neue.variable, league_spartan.variable)}>
				<Providers>
					<Blob />
					<Header />
					<Main>{children}</Main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
