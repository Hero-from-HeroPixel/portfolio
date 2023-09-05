import Heading from '@/app/components/UI/Heading';
import NavigationLink from '@/app/components/Navigation/NavigationLink';
import BoundWrapper from '@/app/components/UI/BoundWrapper';

export default function Home() {
	return (
		<BoundWrapper className="">
			<div className="">
				<Heading as="h1">H1</Heading>
				<Heading as="h2">H2</Heading>
				<Heading as="h3">H3</Heading>
				<Heading as="h4">H4</Heading>
				<Heading as="h5">H5</Heading>
				<Heading as="h6">H6</Heading>
				<p>body</p>
				<p className="light">body light</p>
				<p className="light sm">body light sm</p>
				<p className="display1">Display 1</p>
				<p className="display2">Display 2</p>
				<NavigationLink href="/">NavLink/Button</NavigationLink>
			</div>
		</BoundWrapper>
	);
}
