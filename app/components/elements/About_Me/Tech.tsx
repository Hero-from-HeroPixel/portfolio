import React from 'react';
import Image from 'next/image';
import { KeyTextField } from '@prismicio/client';
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
	PSIcon,
} from '../../icons';

export type IconListT =
	| 'prismic'
	| 'html'
	| 'canva'
	| 'cloudinary'
	| 'contentful'
	| 'css'
	| 'elementor'
	| 'figma'
	| 'framer'
	| 'github'
	| 'javascript'
	| 'shopify'
	| 'typescript'
	| 'webflow'
	| 'wordpress'
	| 'PSIcon'
	| undefined;

export type TechProps = {
	icon?: IconListT;
	iconAsName?: KeyTextField | undefined;
	viewBox?: string;
};

export default function Tech({ icon, iconAsName, viewBox }: TechProps) {
	const iconList = {
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
		PSIcon,
	};
	return (
		<i className="flex gap-2 sm light">
			{icon && (
				<Icon
					viewBox={icon === 'github' ? ' 0 0 512 512' : '0 0 24 24'}
					className="w-6 aspect-square fill-white">
					{iconList[icon]}
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
		</i>
	);
}
