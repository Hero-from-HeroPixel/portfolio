import BoundWrapper from '@/app/components/UI/BoundWrapper';
import Heading from '@/app/components/UI/Heading';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import styles from '@/app/components/elements/Experience/experience.module.css';
import Job from '@/app/components/elements/Experience/Job';
import { prismicClient } from '@/app/lib/clients';

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = async ({ slice }: ExperienceProps): Promise<JSX.Element> => {
	const jobs = await Promise.all(
		slice.items.map((item) => {
			if (isFilled.contentRelationship(item.jobs) && item.jobs.uid) {
				return prismicClient.getByUID('job', item.jobs.uid);
			}
		}),
	);
	return (
		<article>
			<BoundWrapper
				id={slice.primary.section_id}
				data-slice-type={slice.slice_type}
				data-slice-variation={slice.variation}>
				<div className="mt-10 mb-5 lg:mt-20 lg:mb-10">
					<Heading as="h3">Experience</Heading>
					<p className="light my-5">
						I am web developer with{' '}
						<strong className="text-primary">1-year full stack development</strong>{' '}
						and{' '}
						<strong className="text-primary">2 years design experience.</strong>{' '}
					</p>
				</div>
			</BoundWrapper>
			<div className="flex relative">
				<div className={styles.timeline}></div>
				<div className="flex flex-col-reverse">
					{jobs && jobs.map((job) => <Job key={job?.id} job={job} />)}
				</div>
				{!jobs && <p>Could not retrieve jobs</p>}
			</div>
		</article>
	);
};

export default Experience;
