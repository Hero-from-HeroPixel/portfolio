import React from 'react';
import styles from '@/app/components/elements/About_Me/timeline.module.css';

type Props = {
	startDate: string;
	endDate: string;
};

export default function TimeStamp({ startDate, endDate }: Props) {
	return (
		<div className="lg:static absolute lg:mt-9 h-fit flex-row-reverse flex lg:flex-row items-center gap-1">
			<p className="light w-44 sm dark bg-default px-3 rounded-md">{`${startDate} - ${endDate}`}</p>
			<div className={styles.glow}>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
