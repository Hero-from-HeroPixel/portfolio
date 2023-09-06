import BoundWrapper from '@/app/components/UI/BoundWrapper';
import {
	PrimaryButton,
	SecondaryButton,
	DefaultButton,
	LinkButton,
	SocialButton,
} from '@/app/components/UI/Buttons';
import { GitHub } from '@/app/components/icons';

export default function Home() {
	return (
		<BoundWrapper>
			<PrimaryButton className="m-5">Primary Button</PrimaryButton>
			<SecondaryButton className="m-5">Secondary Button</SecondaryButton>
			<DefaultButton className="m-5">Default Button</DefaultButton>
			<LinkButton className="m-5">Link</LinkButton>
			<SocialButton className="m-5">
				<GitHub />
			</SocialButton>
		</BoundWrapper>
	);
}
