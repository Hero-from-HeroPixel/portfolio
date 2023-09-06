import { cn } from '@/app/utils/cn';
import { Button, ButtonProps } from '@nextui-org/button';
import React from 'react';

interface PrimaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function PrimaryButton({ className, children, ...restProps }: PrimaryButtonProps) {
	return (
		<Button
			{...restProps}
			className={cn(
				'scale-105 max-w-fit h-fit p-1 border hover:bg-primary hover:border-background border-secondary rounded-full',
				className,
			)}>
			<div className="btn rounded-full scale-100 py-1 lg:px-16 px-10 md:px-12 bg-primary">
				{children}
			</div>
		</Button>
	);
}

interface SecondaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function SecondaryButton({ className, children, ...restProps }: SecondaryButtonProps) {
	return (
		<Button
			{...restProps}
			variant="bordered"
			color="primary"
			radius="full"
			className={cn(
				'btn lg:px-12 px-6 py-1 max-w-fit hover:bg-primary hover:text-background',
				className,
			)}>
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

interface LinkButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
}
export function LinkButton({ className, children, ...restProps }: LinkButtonProps) {
	return (
		<button {...restProps} className={cn('btn max-w-fit', className)}>
			{children}
		</button>
	);
}

interface SocialButtonsProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}

export function SocialButton({ className, children, ...restProps }: SocialButtonsProps) {
	return (
		<Button
			{...restProps}
			isIconOnly
			variant="ghost"
			color="secondary"
			className={cn('w-8 h-8 p-2 fill-secondary hover:fill-background', className)}>
			{children}
		</Button>
	);
}
