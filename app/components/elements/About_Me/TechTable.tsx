import React from 'react';
import Heading from '@/app/components/UI/Heading';
import styles from '@/app/components/elements/About_Me/techTable.module.css';

type Props = {};

export default function TechTable({}: Props) {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>
						<Heading as="h3">Tech Stack</Heading>
					</th>
					<th>
						<Heading as="h3">Design Stack</Heading>
					</th>
					<th>
						<Heading as="h3">Other</Heading>
					</th>
				</tr>
			</thead>
		</table>
	);
}
