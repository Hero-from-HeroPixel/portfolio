import BoundWrapper from '@/app/components/UI/BoundWrapper';

import { ExternalLink, NavigationLink } from '@/app/components/navigation/Links';
import { prismicClient } from '@/app/lib/clients';

export default async function Home() {
	const { data } = await prismicClient.getSingle('navigation');

	return (
		<BoundWrapper>
			<NavigationLink className="m-5" href="#">
				Navigation Link
			</NavigationLink>
			<NavigationLink className="m-5" field={data.cta_link}>
				Prismic Navigation link
			</NavigationLink>
			<ExternalLink className="m-5" href="#">
				External Link
			</ExternalLink>
			<ExternalLink className="m-5" field={data.cta_link}>
				Prismic External link
			</ExternalLink>
		</BoundWrapper>
	);
}
