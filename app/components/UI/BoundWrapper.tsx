import clsx from 'clsx';
import React from 'react';

type Props = {
	children: React.ReactNode;
	as?: React.ElementType;
	className?: string;
};

export default function Bounded({
	as: Comp = 'section',
	className,
	children,
	...restProps
}: Props) {
	return (
		<Comp
			{...restProps}
			className={clsx('mx-auto w-full  flex flex-col items-center', className)}>
			{children}
		</Comp>
	);
}
