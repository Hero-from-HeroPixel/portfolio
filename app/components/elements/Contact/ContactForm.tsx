'use client';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Textarea,
	useDisclosure,
} from '@nextui-org/react';
import { PrimaryButton } from '../../UI/Buttons';
import { cn } from '@/app/utils/cn';
import Image from 'next/image';
import Honeypot from './Honeypot';
import Loader from '../../UI/Loader';
import Heading from '../../UI/Heading';
import HCaptcha from '@hcaptcha/react-hcaptcha';

type Props = {
	className?: string;
};

const validation = Yup.object({
	// captcha: Yup.string().required('required'),
	name: Yup.boolean().required('required'),
	email: Yup.string().email('email invalid').required('required'),
	phone: Yup.string(),
	subject: Yup.string().required('required'),
	message: Yup.string().required('required'),
});

const initialValues = {
	captcha: false, //start with fail state
	lastname: '', //honeypot field
	name: '',
	email: '',
	phone: '',
	subject: '',
	message: '',
};

interface Values {
	[value: string]: string | boolean;
}

export default function ContactForm({ className }: Props) {
	const [submitState, setSubmitState] = useState<'submitting' | 'success' | 'error'>();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const submitHandler = async (values: Values) => {
		if (values.lastname !== '') return;
		if (values.captcha) {
			setSubmitState('error');
			console.error('Captcha failed');
		}
		setSubmitState('submitting');
		console.log(values);
		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					access_key: process.env.NEXT_PUBLIC_CONTACT_FORM_API,
					subject: values.subject,
					from_name: 'Portfolio',
					...values,
				}),
			});
			console.log(res);
			if (!res.ok) return setSubmitState('error');
			setSubmitState('success');
			if (!isOpen) onOpen();
		} catch (error) {
			setSubmitState('error');
			if (!isOpen) onOpen();
			console.error(error);
		}
	};

	const FormModal = (
		<Modal
			className="dark text-foreground bg-background"
			isOpen={isOpen}
			onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="">
							<Heading
								as="h3"
								className={`${
									(submitState === 'error' && 'text-danger') ||
									(submitState === 'submitting' && 'text-foreground-100') ||
									(submitState === 'success' && 'text-primary')
								}`}>
								{submitState === 'error' && 'Oh no!'}
								{submitState === 'submitting' && 'Sending message'}
								{submitState === 'success' && 'Sent message'}
							</Heading>
						</ModalHeader>
						<ModalBody>
							{submitState === 'error' && (
								<p>Failed to send message. Please try again later.</p>
							)}
							{submitState === 'submitting' && (
								<div className="flex items-center gap-3">
									<p>
										<strong className="font-medium">
											Sending your message to me.
										</strong>
									</p>
									<Loader />
								</div>
							)}
							{submitState === 'success' && (
								<p>
									<strong className="">Thank you.</strong> Successfully sent
									a message. I will be in contact with you shortly.
								</p>
							)}
						</ModalBody>
						<ModalFooter>
							{submitState === 'error' ||
								(submitState === 'success' && (
									<Button
										color={
											submitState === 'success' ? 'primary' : 'danger'
										}
										variant="light"
										onPress={onClose}>
										Close
									</Button>
								))}
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={submitHandler}
			validationSchema={validation}>
			{({ errors, handleChange, handleBlur, values, setFieldValue }) => {
				const onHCaptchaChange = (token: string) => {
					setFieldValue('captcha', token);
				};
				return (
					<Form
						className={cn(
							'grid grid-cols-1 lg:grid-cols-2 gap-10 font-body_font lg:px-0 px-10',
							className,
						)}
						data-netlify="true"
						data-netlify-honeypot="lastname"
						name="Contact-form">
						<Honeypot label="last name" name="lastname" />
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
							className="lg:col-span-2"
							description="Send me a message about work, future projects or ask me any web related question."
							name="message"
							errorMessage={errors.message}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.message}
						/>
						<div className="">
							<HCaptcha
								theme="dark"
								sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" //public access
								onVerify={onHCaptchaChange}
							/>
							{errors.captcha && (
								<p className="light sm text-danger">please fill out captcha</p>
							)}
						</div>

						<div className="flex flex-col lg:col-span-2 lg:w-10/12">
							<PrimaryButton
								onPress={onOpen}
								className="lg:ms-auto mx-auto"
								type="submit">
								Send Message
							</PrimaryButton>
							<Image
								src="/sendGraphic.png"
								alt=""
								width={500}
								height={250}
								className="mx-auto w-1/2 aspect-video opacity-90"
							/>
							{!Object.values(errors).length && FormModal}
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}
