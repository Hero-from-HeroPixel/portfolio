import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MiniProjects`.
 */
export type MiniProjectsProps = SliceComponentProps<Content.MiniProjectsSlice>;

/**
 * Component for "MiniProjects" Slices.
 */
const MiniProjects = ({ slice }: MiniProjectsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for mini_projects (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MiniProjects;
