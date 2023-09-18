import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./slices/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				heading_font: ['var(--font-bebas-neue)'],
				body_font: ['var(--font-league-spartan)'],
			},
			colors: {
				dark: '#212121',
				primary: '#CCFF00',
				secondary: '#ffffff',
				accent: '#3300FF',
				info: '#00CCFF',
				success: '#00FF66',
				warning: '#FFFF00',
				danger: '#FF004C',
				'inactive-white': 'rgba(256, 256, 256, 0.7)',
				'fade-white': 'rgba(256, 256, 256, 0.15)',
				overlay: 'rgba(0,0,0,0.6)',
				'fade-primary': 'rgba(204, 255, 0, 0.6)',
				glass: '#FFFFFF15',
			},
			boxShadow: {
				glow: '0px 0px 15px 4px rgba(51, 0, 255, 0.81), 3px 8px 14px 12px rgba(51, 0, 255, 0.07)',
			},
			dropShadow: {
				'text-glow': '2px 3px 18px rgba(256,256,256,1)',
				glow: ['4px -7px 19px '],
			},
			backgroundColor: {
				glass_hover:
					'linear-gradient(111deg, rgba(0, 0, 0, 0.11) 20.87%, rgba(0, 0, 0, 0.13) 72.76%), radial-gradient(101.34% 61% at 58.3% 43.12%, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.00) 100%)',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			prefix: 'nextui',
			addCommonColors: false,
			themes: {
				dark: {
					colors: {
						background: '#212121',
						foreground: '#ffffff',
						divider: '#111111',
						focus: '#3300FF',
						primary: '#CCFF00',
						secondary: '#3300FF',
						default: '#050505',
						success: '#00FF66',
						warning: '#FFFF00',
						danger: '#FF004C',
					},
				},
			},
		}),
	],
};
export default config;
