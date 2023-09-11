import React from 'react';
import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '../../UI/Heading';
import styles from '@/app/components/elements/Education/Table.module.css';

type Props = {
	id?: string;
};

export default function EducationTable({ id }: Props) {
	return (
		<BoundWrapper id={id}>
			<Heading className="w-10/12 lg:w-full mx-auto" as="h2">
				Education
			</Heading>
			<table className={styles.table}>
				<thead>
					<tr>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Completed Courses/Self education (2022-2023)</td>
						<td>
							<div className="flex flex-col">
								<p>
									Become a WordPress Developer: Unlocking Power With Code by
									Brad Schiff
								</p>
								<p>React - The complete guide 2023 by Academind</p>
							</div>
						</td>
					</tr>
					<tr>
						<td>BCom law degree (2019-2022)</td>
						<td>
							<div className="flex flex-col">
								<p>
									Studied law with plans to become a lawyer. However, I
									decided to switch careers and do what I love, programming.
								</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</BoundWrapper>
	);
}
