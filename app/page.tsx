import { prismicClient } from '@/app/lib/clients';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {
	//*********************Prismic Content */
	let pageData;
	try {
		const { data } = await prismicClient.getSingle('home_page');
		pageData = data;
	} catch (error) {
		console.error('failed to fetch CMS data');
	}

	
	if (pageData) return <Suspense fallback={<Loading/>}>
		<SliceZone slices={pageData.slices} components={components} />
	</Suspense>
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
