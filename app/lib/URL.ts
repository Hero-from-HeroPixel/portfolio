let url;

if (process.env.NODE_ENV === 'development') {
	url = process.env.NEXT_PUBLIC_URL_DEVELOPMENT;
}

if (process.env.NODE_ENV === 'production') {
	url = process.env.NEXT_PUBLIC_URL_PRODUCTION;
}

if (!url) throw new Error('No SITE_URL configured');

export const SITE_URL = url;
