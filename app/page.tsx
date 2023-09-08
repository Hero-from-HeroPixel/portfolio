import BoundWrapper from '@/app/components/UI/BoundWrapper';

import { ExternalLink, NavigationLink, ScrollLink } from '@/app/components/Navigation/Links';
import { prismicClient } from '@/app/lib/clients';

export default async function Home() {
	const { data } = await prismicClient.getSingle('navigation');
	return (
		<BoundWrapper className="h-[300vh] flex flex-col justify-end">
			<div className="h-screen w-full bg-blue-300" id="contact-me"></div>
		</BoundWrapper>
	);
}
