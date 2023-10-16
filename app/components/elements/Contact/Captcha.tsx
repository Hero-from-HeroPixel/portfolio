import HCaptcha from '@hcaptcha/react-hcaptcha';
import React, { Suspense } from 'react';
import Loader from '../../UI/Loader';

type Props = {
	onVerify: ((token: string, ekey: string) => any) | undefined;
	error: boolean;
	touched?: boolean;
};

export default function Captcha({ onVerify, error, touched }: Props) {
	return (
		<Suspense fallback={<Loader />}>
			<div className="rounded-3xl">
				<HCaptcha
					size="normal"
					//@ts-ignore
					ref={captcha}
					theme="dark"
					sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" //public access
					onVerify={onVerify}
				/>
				{error && touched && (
					<p className="light sm text-danger">please fill out captcha</p>
				)}
			</div>
		</Suspense>
	);
}
