import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Heading from '../../UI/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

type Props = {
	id?: string;
};

export default function Contact({ id }: Props) {
	return (
		<BoundWrapper
			className="bg-default grid grid-cols-1 lg:grid-cols-2 place-items-center py-20"
			id={id}>
			<div className="border-1 flex flex-col justify-between border-accent bg-background rounded-xl p-4">
				<div className="">
					<Heading as="h3">Contact Information</Heading>
					<p>Feel free to contact me at anytime.</p>
				</div>
				<div className="flex flex-col gap-8">
					<div className="flex gap-4">
						<FontAwesomeIcon icon={faPhoneVolume} />
						+27 60 732 6830
					</div>
					<div className="flex gap-4">
						<FontAwesomeIcon icon={faEnvelope} />
						dev@heropixel.co.za
					</div>
					<div className="flex gap-4">
						<FontAwesomeIcon icon={faLocationDot} />
						Pretoria, Gauteng - South Africa
					</div>
				</div>
			</div>
		</BoundWrapper>
	);
}
