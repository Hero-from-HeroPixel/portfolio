import BoundWrapper from '@/app/components/UI/BoundWrapper';

import { ExternalLink, NavigationLink, ScrollLink } from '@/app/components/Navigation/Links';
import { prismicClient } from '@/app/lib/clients';

export default async function Home() {
	const { data } = await prismicClient.getSingle('navigation');

	return (
		<BoundWrapper>
			<NavigationLink className="m-5" field={data.cta_link}>
				{data.cta_label}
			</NavigationLink>
		</BoundWrapper>
	);
}
