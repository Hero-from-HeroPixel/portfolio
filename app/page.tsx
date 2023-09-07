import BoundWrapper from '@/app/components/UI/BoundWrapper';

import { ExternalLink, NavigationLink, ScrollLink } from '@/app/components/Navigation/Links';
import { prismicClient } from '@/app/lib/clients';

export default async function Home() {
	const { data } = await prismicClient.getSingle('navigation');

	return (
		<BoundWrapper>
			<ScrollLink sectionId="#">ScrollLink</ScrollLink>
		</BoundWrapper>
	);
}
