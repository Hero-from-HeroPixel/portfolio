import LogoIcon from '@/app/assets/Logo';
import { cn } from '@/app/utils/cn';
import { scrollTo } from '@/app/utils/scrollTo';
type Props = {
	color: 'light' | 'dark';
	className?: string;
};
export default function Brand({ color, className }: Props) {
	const clickHandler = () => {
		scrollTo({ targetId: 'hero' }, { behavior: 'smooth' });
	};
	return (
		<LogoIcon
			onClick={clickHandler}
			width={117}
			height={79}
			className={cn(
				'w-20 pointer-events-auto cursor-pointer',
				color === 'light' && 'fill-foreground',
				color === 'dark' && 'text-background',
				className,
			)}
		/>
	);
}
