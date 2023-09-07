import BoundWrapper from '@/app/components/UI/BoundWrapper';

import { ExternalLink, NavigationLink, ScrollLink } from '@/app/components/Navigation/Links';
import { prismicClient } from '@/app/lib/clients';

export default async function Home() {
	const { data } = await prismicClient.getSingle('navigation');
	return (
		<BoundWrapper className="h-[300vh] flex flex-col justify-between">
			<div className="fixed top-10 left-20 h-32 w-32 bg-accent text-foreground z-20">
				<NavigationLink className="m-5 " field={data.cta_link}>
					{data.cta_label}
				</NavigationLink>
			</div>

			<NavigationLink className="m-5" href="#contact-me">
				{data.cta_label}
			</NavigationLink>
			<NavigationLink className="m-5" href="/contact-me">
				{data.cta_label}
			</NavigationLink>
			<div className="h-screen w-full bg-blue-300" id="contact-me"></div>
		</BoundWrapper>
	);
}
