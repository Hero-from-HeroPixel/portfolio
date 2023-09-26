import { prismicClient } from '@/app/lib/clients';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import { Metadata } from 'next';

export default async function Home() {
	//*********************Prismic Content */
	let pageData;
	try {
		const { data } = await prismicClient.getSingle('home_page');
		pageData = data;
	} catch (error) {
		console.error('failed to fetch CMS data');
	}

	if (pageData) return <SliceZone slices={pageData.slices} components={components} />;
	//*********************End Prismic Content */
}

export async function generateMetadata(): Promise<Metadata> {
	let metaData;
	try {
		metaData = await prismicClient.getSingle('home_page');
	} catch (error) {
		console.error('failed to fetch Metadata');
	}

	return {
		title: metaData?.data.meta_title || 'HeroPixel Portfolio',
		description: metaData?.data.meta_description || 'Portfolio of JJ Grobler',
	};
}
