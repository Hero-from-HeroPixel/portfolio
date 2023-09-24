'use client';
import { cn } from '@/app/utils/cn';
import styles from '@/app/components/UI/Buttons.module.css';

export interface ModalButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
}
export function ModalButton({ className, children, ...restProps }: ModalButtonProps) {
	return (
		<button {...restProps} className={cn('btn max-w-fit', styles.link, className)}>
			{children}
		</button>
	);
}
