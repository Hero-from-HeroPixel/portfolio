import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import styles from '@/app/components/elements/Education/Table.module.css';

/**
 * Props for `Education`.
 */
export type EducationProps = SliceComponentProps<Content.EducationSlice>;

/**
 * Component for "Education" Slices.
 */
const Education = ({ slice }: EducationProps): JSX.Element => {
	return (
		<BoundWrapper
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			id={slice.primary.section_id}>
			<Heading className="w-10/12 lg:w-full mx-auto" as="h2">
				Education
			</Heading>
			<table className={styles.table}>
				<tbody>
					<tr>
						<td>Completed Courses/Self education (2022-2023)</td>
						<td>
							<div>
								<p>
									Become a WordPress Developer: Unlocking Power With Code by
									<strong> Brad Schiff</strong>
								</p>
								<p>
									React - The complete guide 2023 by{' '}
									<strong>Academind</strong>
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
									I studied law with plans to become a lawyer. However, I
									decided to switch careers and do what I love, programming.
								</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</BoundWrapper>
	);
};

export default Education;
