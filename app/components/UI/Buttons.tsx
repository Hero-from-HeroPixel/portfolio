import { cn } from '@/app/utils/cn';
import { Button, ButtonProps } from '@nextui-org/button';
import React from 'react';

interface PrimaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function PrimaryButton({ className, children, ...restProps }: PrimaryButtonProps) {
	return (
		<Button {...restProps} className={cn('max-w-fit h-fit p-1 rounded-full', className)}>
			<div className="py-3 px-16 rounded-full bg-primary">{children}</div>
		</Button>
	);
}

interface SecondaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function SecondaryButton({ className, children, ...restProps }: SecondaryButtonProps) {
	return (
		<Button {...restProps} className={cn('max-w-fit', className)}>
			{children}
		</Button>
	);
}

interface DefaultButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function DefaultButton({ className, children, ...restProps }: DefaultButtonProps) {
	return (
		<Button {...restProps} className={cn('max-w-fit', className)}>
			{children}
		</Button>
	);
}

interface LinkButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function LinkButton({ className, children, ...restProps }: LinkButtonProps) {
	return (
		<Button {...restProps} className={cn('max-w-fit', className)}>
			{children}
		</Button>
	);
}

interface SocialButtons extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}

export function SocialButton({ className, children, ...restProps }: LinkButtonProps) {
	return (
		<Button {...restProps} className={cn('max-w-fit', className)}>
			{children}
		</Button>
	);
}
