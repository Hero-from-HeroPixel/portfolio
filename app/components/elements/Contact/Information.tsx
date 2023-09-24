import React from 'react';
import Heading from '../../UI/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { SocialButton } from '../../UI/Buttons';
import { GithubIcon, LinkdnIcon, WhatsAppIcon } from '../../icons';
import { GITHUB_LINK, LINKDN_LINK, MAIL_LINK, PHONE_LINK } from '@/app/constants/Social';
import { cn } from '@/app/utils/cn';
import Link from 'next/link';

type Props = {
	className?: string;
};

export default function Information({ className }: Props) {
	return (
		<div
			className={cn(
				'relative border-2 flex flex-col justify-between font-body_font border-accent bg-background rounded-3xl px-12 py-20 gap-20 overflow-hidden',
				className,
			)}>
			<div className="">
				<Heading as="h3">Contact Information</Heading>
				<p className="light">Feel free to contact me at anytime.</p>
			</div>
			<div className="flex flex-col gap-8">
				<div className="flex gap-4 items-center">
					<FontAwesomeIcon className="w-5" icon={faPhoneVolume} />
					<Link
						rel="noreferrer"
						target="_blank"
						href="tel:+27607326830"
						className="light sm">
						+27 60 732 6830
					</Link>
				</div>
				<div className="flex gap-4 items-center">
					<FontAwesomeIcon className="w-5" icon={faEnvelope} />
					<Link
						target="_blank"
						rel="noreferrer"
						href="mailto:dev@heropixel.co.za"
						className="light sm">
						dev@heropixel.co.za
					</Link>
				</div>
				<div className="flex gap-4 items-center">
					<FontAwesomeIcon className="w-5" icon={faLocationDot} />
					<p className="light sm">Pretoria, Gauteng - South Africa</p>
				</div>
			</div>
			<div className="flex gap-5 z-10">
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
			<CircleGraphic r={60} className=" absolute right-8 bottom-8 fill-accent" />
			<CircleGraphic className="absolute -right-14 -bottom-14 fill-accent" />
		</div>
	);
}

const CircleGraphic = ({ className, r = 90 }: { className?: string; r?: number }) => (
	<svg height={r * 2} width={r * 2} className={className}>
		<circle r={r} cy={r} cx={r} stroke="none" strokeWidth="3" opacity="50%" />
	</svg>
);
