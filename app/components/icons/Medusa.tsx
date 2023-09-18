import React from 'react';

function Medusa({ className }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="33"
			height="33"
			fill="none">
			<path fill="url(#a)" d="M.5 0h32v33H.5z"></path>
			<defs>
				<pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox">
					<use transform="matrix(.00103 0 0 .001 -.02 0)" xlinkHref="#b"></use>
				</pattern>
			</defs>
		</svg>
	);
}

export default Medusa;
