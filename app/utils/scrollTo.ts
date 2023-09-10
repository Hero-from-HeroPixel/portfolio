export const scrollTo = (
	{ href, targetId }: { href?: string; targetId?: string },
	options?: ScrollIntoViewOptions,
) => {
	if (!href && !targetId) return console.error('target not specified');

	if (href) {
		targetId = href.replace(/.*\#/, '');
	}
	const targetEl = document.getElementById(targetId!);
	targetEl?.scrollIntoView(options);
};
