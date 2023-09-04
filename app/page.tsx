import Image from 'next/image';

export default function Home() {
	return (
		<div className="hover:shadow-glow h-20 w-20 flex items-center justify-center mx-auto rounded-xl border-accent border">
			<h1 className="drop-shadow-text-glow">Home</h1>
		</div>
	);
}
