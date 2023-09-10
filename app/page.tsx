import BoundWrapper from '@/app/components/UI/BoundWrapper';

import { prismicClient } from '@/app/lib/clients';

export default async function Home() {
	const { data } = await prismicClient.getSingle('navigation');
	return (
		<BoundWrapper className=" flex flex-col justify-between">
			<div className="h-screen w-full bg-red-700" id="hero"></div>
			<div className="h-screen w-full bg-green-500" id="education"></div>
			<div className="h-screen w-full bg-pink-600" id="experience"></div>
			<div className="h-screen w-full bg-slate-700" id="projects"></div>
			<div className="h-screen w-full bg-purple-500" id="designs"></div>
			<div className="h-screen w-full bg-blue-300" id="contact-me"></div>
		</BoundWrapper>
	);
}
