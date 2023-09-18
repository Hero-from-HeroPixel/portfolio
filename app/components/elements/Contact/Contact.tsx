import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Information from './Information';
import ContactForm from './ContactForm';
import { HeroModal } from '../../UI/HeroModal';

type Props = {
	id?: string;
};

export default function Contact({ id }: Props) {
	return (
		<BoundWrapper
			stretch
			className="lg:rounded-t-none rounded-3xl bg-default pt-10 pb-5 lg:pt-24 lg:pb-10 "
			id={id}>
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center">
				<Information className="lg:w-1/2 mx-auto" />
				<ContactForm className="mt-10 lg:mt-0 lg:w-4/6" />
			</div>
			<p className="lg:text-sm text-xs mx-auto mt-10 lg:w-full w-3/4 text-center font-thin">
				*Your information is stored safe and secure according to POPI Act guidelines.
				{/* By filling in your details below you agree to HeroPixel{' '}
				<HeroModal
					modalTitle="Privacy Policy"
					OpenButton={{
						title: 'privacy policy',
						className: 'border-none',
					}}
					ModalBodyContent={<div></div>}
				/> */}
			</p>
		</BoundWrapper>
	);
}
