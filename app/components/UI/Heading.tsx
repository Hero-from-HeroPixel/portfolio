import { cn } from '@/app/utils/cn';
import clsx from 'clsx';
import React from 'react';

type Props = {
	children: React.ReactNode;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
	size?: 'xl' | 'lg' | 'md' | 'sm';
	weight?: '900' | '800' | '700' | '600' | '500' | '400' | '300' | '200' | '100';
};

export default function Heading({
	as: Comp = 'h1',
	className,
	size,
	children,
	weight,
}: Props) {
	return (
		<Comp
			className={cn(
				'font-heading_font',
				Comp &&
					Comp === 'h1' &&
					'2xl:text-[13.56rem] lg:text-[10rem] md:text-8xl text-[5.3125rem] font-bold font-body_font',
				Comp &&
					Comp === 'h2' &&
					'2xl:text-[5.3125rem] lg:text-6xl md:text-5xl text-[2.5rem]',
				Comp && Comp === 'h3' && '2xl:text-[2.5rem] lg:text-4xl text-[1.75rem]',
				Comp && Comp === 'h4' && 'text-[1.125rem] lg:text-[1.5rem]',
				Comp &&
					Comp === 'h5' &&
					'text-[1.125rem] lg:text-[1.5rem] font-body_font font-bold ',
				Comp && Comp === 'h6' && 'text-[1rem] lg:text-[1.5rem] font-body_font',
				size && size === 'xl' && 'text-5xl md:text-7xl',
				size && size === 'lg' && 'text-4xl md:text-5xl',
				size && size === 'md' && 'text-3xl md:text-4xl',
				size && size === 'sm' && 'text-2xl md:text-3xl',
				weight && weight === '100' && 'font-thin',
				weight && weight === '200' && 'font-extralight',
				weight && weight === '300' && 'font-light',
				weight && weight === '400' && 'font-normal',
				weight && weight === '500' && 'font-medium',
				weight && weight === '600' && 'font-semibold',
				weight && weight === '700' && 'font-bold',
				weight && weight === '800' && 'font-extrabold',
				weight && weight === '900' && 'font-black',
				className,
			)}>
			{children}
		</Comp>
	);
}
