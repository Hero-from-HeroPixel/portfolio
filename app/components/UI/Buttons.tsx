'use client';
import { cn } from '@/app/utils/cn';
import { Button, ButtonProps } from '@nextui-org/button';
import Link, { LinkProps } from 'next/link';
import React from 'react';

export interface PrimaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
	appearance?: {
		className: string;
	};
}
export function PrimaryButton({
	className,
	children,
	appearance,
	...restProps
}: PrimaryButtonProps) {
	return (
		<Button
			className={cn(
				'btn p-1 text-background hover:!text-background border-foreground transition-all !duration-300',
				className,
			)}
			{...restProps}
			color="primary"
			variant="ghost"
			radius="full">
			<span
				className={cn(
					'rounded-full justify-center bg-primary w-full h-full px-16 flex items-center',
					appearance?.className,
				)}>
				{children}
			</span>
		</Button>
	);
}

export interface SecondaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function SecondaryButton({ className, children, ...restProps }: SecondaryButtonProps) {
	return (
		<Button
			{...restProps}
			variant="ghost"
			color="primary"
			radius="full"
			className={cn(
				'btn lg:px-12 px-6 py-1 max-w-fit hover:text-background',
				className,
			)}>
			{children}
		</Button>
	);
}

export interface DefaultButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function DefaultButton({ className, children, ...restProps }: DefaultButtonProps) {
	return (
		<Button
			{...restProps}
			variant="solid"
			color="default"
			radius="full"
			className={cn(
				'btn max-w-fit text-foreground lg:px-16 hover:bg-foreground hover:text-background',
				className,
			)}>
			{children}
		</Button>
	);
}

export interface SocialButtonsProps extends LinkProps {
	className?: string;
	children: React.ReactNode;
	href: string;
	external?: boolean;
	ariaLabel?: string;
}

export function SocialButton({
	external = true,
	href,
	className,
	children,
	ariaLabel,
	...restProps
}: SocialButtonsProps) {
	return (
		<Link
			target={external ? '_blank' : '_self'}
			rel={external ? 'noreferrer' : ''}
			href={href}
			aria-label={ariaLabel}
			{...restProps}
			className={cn(
				'w-10 h-10 bg-transparent border-none sm:border-2 p-2 lg:p-1 fill-secondary hover:fill-background hover:text-background hover:bg-foreground rounded-xl transition-all duration-200 ease-out',
				className,
			)}>
			{children}
		</Link>
	);
}
