import React from 'react';
import Image from 'next/image';
import Icon, {
	canva,
	cloudinary,
	contentful,
	css,
	elementor,
	figma,
	framer,
	github,
	html,
	javascript,
	prismic,
	shopify,
	typescript,
	webflow,
	wordpress,
	photoshop,
} from '../../icons';

export type SkillProps = {
	icon?:
		| 'canva'
		| 'cloudinary'
		| 'contentful'
		| 'css'
		| 'elementor'
		| 'figma'
		| 'framer'
		| 'github'
		| 'html'
		| 'javascript'
		| 'prismic'
		| 'shopify'
		| 'typescript'
		| 'webflow'
		| 'wordpress'
		| 'photoshop'
		| null;
	title: string;
	iconAsName?: string;
	viewBox?: string;
};

const IconList = {
	canva,
	cloudinary,
	contentful,
	css,
	elementor,
	figma,
	framer,
	github,
	html,
	javascript,
	prismic,
	shopify,
	typescript,
	webflow,
	wordpress,
	photoshop,
};

export default function Skill({ icon, title, iconAsName, viewBox }: SkillProps) {
	return (
		<li className="flex gap-2 my-2">
			{icon && (
				<Icon viewBox={viewBox} className="w-6 aspect-square fill-white">
					{IconList[icon]}
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
			<p className="sm light">{title}</p>
		</li>
	);
}
