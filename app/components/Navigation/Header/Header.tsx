import { prismicClient } from '@/app/lib/clients';
import React from 'react';
import HeroNavbar from '@/app/components/Navigation/Header/HeroNavbar';

type Props = {};

export default async function Header({}: Props) {
	const { data: header } = await prismicClient.getSingle('navigation');
	return <HeroNavbar data={header} />;
}
