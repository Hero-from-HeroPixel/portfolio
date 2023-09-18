import React from 'react';
import styles from '@/app/components/UI/Loader.module.css';

type Props = {};

export default function Loader({}: Props) {
	return (
		<div className={styles.loader}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
