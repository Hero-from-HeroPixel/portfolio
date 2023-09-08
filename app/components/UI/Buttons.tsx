import { cn } from '@/app/utils/cn';
import { Button, ButtonProps } from '@nextui-org/button';
import React from 'react';
import styles from '@/app/components/UI/Buttons.module.css';

interface PrimaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function PrimaryButton({ className, children, ...restProps }: PrimaryButtonProps) {
	return (
		<div className="">
			<Button
				{...restProps}
				color="primary"
				variant="solid"
				radius="full"
				className={cn('btn px-16 text-background', className)}>
				{children}
			</Button>
		</div>
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
		<button {...restProps} className={cn('btn max-w-fit', styles.link, className)}>
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
			className={cn(
				' border-none sm:border-2 p-2 lg:p-1 fill-secondary hover:fill-background',
				className,
			)}>
			{children}
		</Button>
	);
}
