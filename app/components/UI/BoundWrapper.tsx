import clsx from 'clsx';
import React from 'react';

type Props = {
	children: React.ReactNode;
	as?: React.ElementType;
	className?: string;
};

export default function BoundWrapper({
	as: Comp = 'section',
	className,
	children,
	...restProps
}: Props) {
	return (
		<Comp
			{...restProps}
			className={clsx(
				'mx-auto w-full md:w-11/12 xl:w-10/12 2xl:w-9/12 flex flex-col',
				className,
			)}>
			{children}
		</Comp>
	);
}
