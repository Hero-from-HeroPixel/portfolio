import { prismicClient } from '@/app/lib/clients';
import React from 'react';
import HeroNavbar from '@/app/components/Navigation/Header/HeroNavbar';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';

type Props = {};

// const components: JSXMapSerializer = {
// 	paragraph: ({ children }) => <p className="sm light font-body_font">{children}</p>,
// 	strong: ({ children }) => (
// 		<strong className="sm light font-body_font text-primary">{children}</strong>
// 	),
// };

export default async function Header({}: Props) {
	const { data: header } = await prismicClient.getSingle('navigation');
	// const { data: credits } = await prismicClient.getSingle('credits');
	// const modalTitle = credits.heading as string;

	// const ModalBodyContent = credits.credits.map(({ credit }, i) => (
	// 	<PrismicRichText components={components} key={i} field={credit} />
	// ));
	return <HeroNavbar data={header} />;
}
