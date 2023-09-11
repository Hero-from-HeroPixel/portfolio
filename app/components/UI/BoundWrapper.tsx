import { KeyTextField } from '@prismicio/client';
import clsx from 'clsx';
import React from 'react';

interface Props {
	children: React.ReactNode;
	as?: React.ElementType;
	className?: string;
	id?: string | KeyTextField;
}

export default function BoundWrapper({
	as: Comp = 'section',
	id,
	className,
	children,
	id,
	...restProps
}: Props) {
	return (
		<Comp
			id={id}
			{...restProps}
			className={clsx(
				'mx-auto w-full md:w-11/12 xl:w-10/12 2xl:w-9/12 flex flex-col',
				className,
			)}>
			{children}
		</Comp>
	);
}
