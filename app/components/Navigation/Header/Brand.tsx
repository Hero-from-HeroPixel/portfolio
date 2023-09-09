import LogoIcon from '@/app/assets/Logo';
import { cn } from '@/app/utils/cn';
type Props = {
	color: 'light' | 'dark';
	className?: string;
};
export default function Brand({ color, className }: Props) {
	return (
		<LogoIcon
			width={117}
			height={79}
			className={cn(
				'w-20',
				color === 'light' && 'fill-foreground',
				color === 'dark' && 'text-background',
				className,
			)}
		/>
	);
}
