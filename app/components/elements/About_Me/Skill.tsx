import React from 'react';
import Icon from '@/app/components/icons';
import Image from 'next/image';

export type SkillProps = {
	icon?: React.ReactNode;
	title: string;
	iconAsName?: string;
	viewBox?: string;
};

export default function Skill({ icon, title, iconAsName, viewBox }: SkillProps) {
	return (
		<p className="flex gap-2 sm light">
			{icon && (
				<Icon viewBox={viewBox} className="w-6 aspect-square fill-white">
					{icon}
				</Icon>
			)}
			{iconAsName && (
				<Image
					src={`/icons/${iconAsName}.svg`}
					alt={iconAsName}
					width={64}
					height={64}
					style={{ objectFit: 'contain' }}
					className="w-6 aspect-square"
				/>
			)}
			{title}
		</p>
	);
}
