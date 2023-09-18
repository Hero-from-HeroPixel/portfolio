import React from 'react';

type Props = {
	name: string;
	label: string;
};

export default function Honeypot({ name, label }: Props) {
	return (
		<p className="hidden">
			<label>
				{label}
				<input name={name} />
			</label>
		</p>
	);
}
