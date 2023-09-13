import React from 'react';
import BoundWrapper from '../../UI/BoundWrapper';

type Props = {
	id: string;
};

export default function Projects({ id }: Props) {
	return <BoundWrapper id={id}></BoundWrapper>;
}
