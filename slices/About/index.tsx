import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import dynamic from 'next/dynamic';
const About = dynamic(() => import('@/app/components/elements/About_Me/About'));
/**
 * Props for `Job`.
 */
export type AboutProps = SliceComponentProps<Content.JobSlice>;

/**
 * Component for "Job" Slices.
 */
const Job = ({ slice }: AboutProps): JSX.Element => {
	return <About id={slice.primary.section_id as string} slice={slice} />;
};

export default Job;
