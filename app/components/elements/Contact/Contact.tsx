import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';
import Information from './Information';
import ContactForm from './ContactForm';

type Props = {
	id?: string;
};

export default function Contact({ id }: Props) {
	return (
		<BoundWrapper
			stretch
			className="bg-default grid grid-cols-1 lg:grid-cols-2 py-24 items-center"
			id={id}>
			<Information className="w-1/2 mx-auto" />
			<ContactForm className="w-4/6" />
		</BoundWrapper>
	);
}
