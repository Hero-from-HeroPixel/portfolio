'use client';
import React from 'react';
import Heading from '../../UI/Heading';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { RichTextField } from '@prismicio/client';
import { LazyMotion, m, Variants } from 'framer-motion';
const animFeatures = () => import('@/app/animFeatures').then((res) => res.default);

const components: JSXMapSerializer = {
	paragraph: ({ children }) => (
		<p className="text-start leading-tight tracking-tighter font-light lg:font-normal">
			{children}
		</p>
	),
	strong: ({ children }) => <strong className="text-primary">{children}</strong>,
};

type Props = {
	line1: string;
	span: string;
	line2: string;
	introduction: RichTextField;
};

const letter: Variants = {
	initial: { opacity: 0, translateX: -50 },
	animate: {
		opacity: 1,
	},
};

const paragraph: Variants = {
	initial: { opacity: 0 },
	animate: {
		transition: { delay: 2.5, duration : 0.4, ease : 'easeIn' },
		opacity: 1,
	},
};

const letter_delay = 0.1;

export default function HeroText({ line1, span, line2, introduction }: Props) {
	return (
		<div className="relative w-fit lg:h-3/4 flex flex-col justify-center items-center lg:justify-start gap-12 lg:gap-0">
			<LazyMotion features={animFeatures}>
				<Heading className="relative leading-[80%] lg:leading-[80%] tracking-[-0.37rem] lg:tracking-[-0.95rem]">
					{line1.split('').map((char, i) => (
						<m.span
							initial="initial"
							animate="animate"
							transition={{
								delay: i * letter_delay,
								duration: 1,
								ease: 'easeOut',
							}}
							variants={letter}
							key={i}>
							{char}
						</m.span>
					))}
					<m.span
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className=" align-middle ms-2 lg:absolute lg:top-10 2xl:top-16 mb-5 lg:border-2 border font-normal rounded-full border-white text-2xl lg:text-4xl lg:py-2 lg:px-6 px-4 py-2 lg:-rotate-90 tracking-normal">
						{span}
					</m.span>{' '}
					<br />
					{line2.split('').map((char, i) => (
						<m.span
							initial="initial"
							transition={{
								delay: 1 + i * letter_delay,
								duration: 1,
								ease: 'easeOut',
							}}
							animate="animate"
							variants={letter}
							key={i}>
							{char}
						</m.span>
					))}
					<m.span
						initial="initial"
						animate="animate"
						variants={paragraph}
						className="absolute right-0 top-full 2xl:w-80 text-2xl lg:text-4xl 2xl:text-6xl tracking-widest lg:tracking-[0.4rem] font-light lg:font-normal leading-none">
						full stack <br />
						developer
					</m.span>
				</Heading>
				{introduction && (
					<m.span
						initial="initial"
						animate="animate"
						transition={{ delay: 3 }}
						variants={paragraph}
						className="lg:absolute lg:top-4 2xl:top-8 lg:-right-20 2xl:-right-8 w-72 lg:w-56 2xl:w-72">
						<PrismicRichText components={components} field={introduction} />
					</m.span>
				)}
			</LazyMotion>
		</div>
	);
}
