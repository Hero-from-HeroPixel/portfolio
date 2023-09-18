'use client';
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Input, Textarea } from '@nextui-org/react';
import { PrimaryButton } from '../../UI/Buttons';
import { cn } from '@/app/utils/cn';
import Image from 'next/image';

type Props = {
	className?: string;
};

const validation = Yup.object({
	name: Yup.string().required(),
	email: Yup.string().email().required(),
	phone: Yup.string(),
	subject: Yup.string().required(),
	message: Yup.string().required(),
});

const initialValues = {
	name: '',
	email: '',
	phone: '',
	subject: '',
	message: '',
};

interface Values {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

export default function ContactForm({ className }: Props) {
	const submitHandler = async (values: Values) => {
		await new Promise((r) => setTimeout(r, 500));
		alert(JSON.stringify(values, null, 2));
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={submitHandler}
			validationSchema={validation}>
			<Form className={cn('grid grid-cols-2 gap-10 font-body_font', className)}>
				<Input
					isRequired
					size="lg"
					type="text"
					variant={'underlined'}
					label="Your Name"
				/>
				<Input
					isRequired
					size="lg"
					type="email"
					variant={'underlined'}
					label="Your Email"
				/>
				<Input size="lg" type="text" variant={'underlined'} label="Your Contact no." />
				<Input
					isRequired
					size="lg"
					type="text"
					variant={'underlined'}
					label="Subject"
				/>
				<Textarea
					variant={'underlined'}
					label="Message"
					labelPlacement="outside"
					placeholder="Write your message here"
					className="col-span-2"
				/>
				<div className="flex flex-col col-span-2 w-10/12">
					<PrimaryButton className="ms-auto" type="submit">
						Send Message
					</PrimaryButton>
					<Image
						src="/sendGraphic.png"
						alt=""
						width={500}
						height={250}
						className=" w-4/6 aspect-video opacity-90"
					/>
				</div>
			</Form>
		</Formik>
	);
}
