'use client';
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, Textarea } from '@nextui-org/react';
import { PrimaryButton } from '../../UI/Buttons';
import { cn } from '@/app/utils/cn';
import Image from 'next/image';

type Props = {
	className?: string;
};

const validation = Yup.object({
	name: Yup.string().required('required'),
	email: Yup.string().email('email invalid').required('required'),
	phone: Yup.string(),
	subject: Yup.string().required('required'),
	message: Yup.string().required('required'),
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
			{({ errors, handleChange, handleBlur, values }) => {
				return (
					<Form className={cn('grid grid-cols-2 gap-10 font-body_font', className)}>
						<Input
							isRequired
							type="text"
							variant={'underlined'}
							label="Your Name"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
							errorMessage={errors.name}
						/>
						<Input
							isRequired
							type="email"
							variant={'underlined'}
							label="Your Email"
							name="email"
							errorMessage={errors.email}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<Input
							type="text"
							variant={'underlined'}
							label="Your Contact no."
							description="Fill in if you prefer a callback"
							name="phone"
							errorMessage={errors.phone}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.phone}
						/>
						<Input
							isRequired
							type="text"
							variant={'underlined'}
							label="Subject"
							name="subject"
							errorMessage={errors.subject}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.subject}
						/>
						<Textarea
							variant={'underlined'}
							label="Message"
							labelPlacement="outside"
							placeholder="Write your message here"
							className="col-span-2"
							description="Send me a message about work, future projects or ask me any web related question."
							name="message"
							errorMessage={errors.message}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.message}
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
								className="mx-auto w-1/2 aspect-video opacity-90"
							/>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}
