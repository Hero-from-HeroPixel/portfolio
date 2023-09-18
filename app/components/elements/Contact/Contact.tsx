import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Heading from '../../UI/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { SocialButton } from '../../UI/Buttons';
import { GithubIcon, LinkdnIcon, WhatsAppIcon } from '../../icons';
import { GITHUB_LINK, LINKDN_LINK, MAIL_LINK, PHONE_LINK } from '@/app/constants/Social';

type Props = {
	id?: string;
};

export default function Contact({ id }: Props) {
	return (
		<BoundWrapper
			stretch
			className="bg-default grid grid-cols-1 lg:grid-cols-2 place-items-center py-20"
			id={id}>
			<div className="border-1 flex flex-col justify-between border-accent bg-background rounded-3xl p-12 gap-20">
				<div className="">
					<Heading as="h3">Contact Information</Heading>
					<p className="light">Feel free to contact me at anytime.</p>
				</div>
				<div className="flex flex-col gap-8">
					<div className="flex gap-4 items-center">
						<FontAwesomeIcon icon={faPhoneVolume} />
						<p className="light sm">+27 60 732 6830</p>
					</div>
					<div className="flex gap-4 items-center">
						<FontAwesomeIcon icon={faEnvelope} />
						<p>dev@heropixel.co.za</p>
					</div>
					<div className="flex gap-4 items-center">
						<FontAwesomeIcon icon={faLocationDot} />
						<p>Pretoria, Gauteng - South Africa</p>
					</div>
				</div>
				<div className="flex gap-5">
					<SocialButton href={GITHUB_LINK}>
						<GithubIcon />
					</SocialButton>
					<SocialButton href={MAIL_LINK}>
						<FontAwesomeIcon className="w-full h-full" icon={faEnvelope} />
					</SocialButton>
					<SocialButton href={PHONE_LINK}>
						<WhatsAppIcon />
					</SocialButton>
					<SocialButton href={LINKDN_LINK}>
						<LinkdnIcon />
					</SocialButton>
				</div>
			</div>
		</BoundWrapper>
	);
}
