import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import { Content, isFilled } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import styles from '@/app/components/elements/Education/Table.module.css';
import { prismicClient } from '@/app/lib/clients';

/**
 * Props for `Education`.
 */
export type EducationProps = SliceComponentProps<Content.EducationSlice>;

/**
 * Component for "Education" Slices.
 */
const Education = async ({ slice }: EducationProps): Promise<JSX.Element> => {
	const educationEntries = await Promise.all(
		slice.items.map((item) => {
			if (
				isFilled.contentRelationship(item.education_entry) &&
				item.education_entry.uid
			) {
				return prismicClient.getByUID('education_entry', item.education_entry.uid);
			}
		}),
	);

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
					{educationEntries &&
						educationEntries.map((entry) => (
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
		</BoundWrapper>
	);
};

export default Education;
