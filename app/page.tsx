import BoundWrapper from '@/app/components/UI/BoundWrapper';

import { prismicClient } from '@/app/lib/clients';

export default async function Home() {
	const { data } = await prismicClient.getSingle('navigation');
	return (
		<BoundWrapper className="h-[300vh] flex flex-col justify-between">
			<div className="h-screen w-full bg-red-700" id="hero"></div>
			<div className="h-screen w-full bg-blue-300" id="contact-me"></div>
		</BoundWrapper>
	);
}
