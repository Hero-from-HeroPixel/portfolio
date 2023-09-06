import { cn } from '@/app/utils/cn';
import { Button, ButtonProps } from '@nextui-org/button';
import React from 'react';

interface PrimaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function PrimaryButton({ className, children, ...restProps }: PrimaryButtonProps) {
	return <Button className={cn('', className)}>{children}</Button>;
}

interface SecondaryButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function SecondaryButton({ className, children, ...restProps }: SecondaryButtonProps) {
	return <Button className={cn('', className)}>{children}</Button>;
}

interface DefaultButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function DefaultButton({ className, children, ...restProps }: DefaultButtonProps) {
	return <Button className={cn('', className)}>{children}</Button>;
}

interface LinkButtonProps extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
export function LinkButton({ className, children, ...restProps }: LinkButtonProps) {
	return <Button className={cn('', className)}>{children}</Button>;
}

interface SocialButtons extends ButtonProps {
	className?: string;
	children: React.ReactNode;
}
