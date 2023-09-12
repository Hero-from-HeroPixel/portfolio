'use client';
import React from 'react';
import styles from '@/app/components/elements/Education/Table.module.css';
import { Variants, motion } from 'framer-motion';
import { Content } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

type Props = {
	entries: (Content.EducationEntryDocument<string> | undefined)[];
};

const variants: Variants = {
	start: {
		y: 50,
		opacity: 0,
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.2, delay: 0.2 },
	},
};

export default function EduTable({ entries }: Props) {
	return (
		<table className={styles.table}>
			<tbody>
				{entries &&
					entries.map((entry) => (
						<>
							{entry && (
								<tr key={entry.id}>
									<td className={styles.noUnderline}>
										<PrismicRichText field={entry.data.title} />
									</td>
									<td>
										<div
											className={
												entry.data.content.length > 1
													? ''
													: styles.noUnderline
											}>
											{entry.data.content.map((item, i) => (
												<PrismicRichText
													key={i}
													field={item.education}
												/>
											))}
										</div>
									</td>
								</tr>
							)}
						</>
					))}
			</tbody>
		</table>
	);
}
