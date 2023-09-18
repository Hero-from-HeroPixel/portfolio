import { faCodeBranch, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SelectField } from '@prismicio/client';
import React from 'react';

type Props = {
	type: SelectField<'Side Project' | 'Tutorial' | 'Paid Project'>;
};

export default function Indicator({ type }: Props) {
	return (
		<>
			{type === 'Tutorial' && (
				<FontAwesomeIcon className="w-4 h-fit text-primary" icon={faGraduationCap} />
			)}
			{type === 'Side Project' && (
				<FontAwesomeIcon className="w-4 h-fit text-accent" icon={faCodeBranch} />
			)}
		</>
	);
}
