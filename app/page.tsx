import BoundWrapper from '@/app/components/ui/BoundWrapper';
import {
	PrimaryButton,
	SecondaryButton,
	DefaultButton,
	LinkButton,
	SocialButton,
} from '@/app/components/ui/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GitHub } from './components/icons';

export default function Home() {
	return (
		<BoundWrapper>
			<PrimaryButton className="m-5">Primary Button</PrimaryButton>
			<SecondaryButton>Secondary Button</SecondaryButton>
			<DefaultButton>Default Button</DefaultButton>
			<LinkButton>Link</LinkButton>
			<SocialButton>
				<GitHub className="w-4" />
			</SocialButton>
		</BoundWrapper>
	);
}
