import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { prismicClient } from '@/app/lib/clients';
import EduTable from '@/app/components/elements/Education/EduTable';

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
				{slice.primary.heading}
			</Heading>
			<EduTable entries={educationEntries} />
		</BoundWrapper>
	);
};

export default Education;
