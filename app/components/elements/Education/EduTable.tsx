'use client';
import React from 'react';
import styles from '@/app/components/elements/Education/Table.module.css';
import { Variants, motion } from 'framer-motion';
type Props = {};

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

export default function EduTable({}: Props) {
	return (
		<table className={styles.table}>
			<tbody>
				<tr>
					<motion.td initial="start" whileInView="enter" variants={variants}>
						Completed Courses/Self education (2022-2023)
					</motion.td>
					<td>
						<div>
							<p>
								Become a WordPress Developer: Unlocking Power With Code by
								<strong> Brad Schiff</strong>
							</p>
							<p>
								React - The complete guide 2023 by <strong>Academind</strong>
							</p>
							<p>
								The Web Developer Bootcamp by <strong></strong> Colt Steele
							</p>
						</div>
					</td>
				</tr>
				<tr>
					<td>B. Com Law degree (2019-2022)</td>
					<td>
						<div className="flex flex-col">
							<p className={styles.noUnderline}>
								I studied law with plans to become a lawyer. However, I decided
								to switch careers and do what I love, programming.
							</p>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
