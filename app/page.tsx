import BoundWrapper from '@/app/components/UI/BoundWrapper';

import { prismicClient } from '@/app/lib/clients';

export default async function Home() {
	const { data } = await prismicClient.getSingle('navigation');
	return (
		<BoundWrapper className=" flex flex-col justify-between">
			<div className="h-screen w-full" id="hero"></div>
			<div className="h-screen w-full " id="education"></div>
			<div className="h-screen w-full " id="projects"></div>
			<div className="h-screen w-full " id="designs"></div>
			<div className="h-screen w-full " id="contact-me"></div>
		</BoundWrapper>
	);
}
