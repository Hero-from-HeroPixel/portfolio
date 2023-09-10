import { cn } from '@/app/utils/cn';
import { Button, ButtonProps } from '@nextui-org/button';
import React from 'react';
import styles from '@/app/components/UI/Buttons.module.css';

export interface PrimaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function PrimaryButton({ className, children, ...restProps }: PrimaryButtonProps) {
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
			<span className="rounded-full bg-primary w-full h-full px-16">{children}</span>
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

export interface SocialButtonsProps extends ButtonProps {
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
				' border-none sm:border-2 p-2 lg:p-1 fill-secondary hover:fill-background hover:text-background',
				className,
			)}>
			{children}
		</Button>
	);
}
