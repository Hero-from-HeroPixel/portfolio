import BoundWrapper from '@/app/components/UI/BoundWrapper';

import { prismicClient } from '@/app/lib/clients';
import Hero from '@/app/components/elements/Hero/Hero';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import { Metadata } from 'next';
import EducationTable from '@/app/components/elements/Education/EducationTable';
import About from './components/elements/About_Me/About';

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
	return (
		<>
			<Hero />
			<EducationTable id="education" />
			<About id="experience" />
			<div className="h-screen w-full " id="projects"></div>
			<div className="h-screen w-full " id="designs"></div>
			<div className="h-screen w-full " id="contact-me"></div>
		</>
	);
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
