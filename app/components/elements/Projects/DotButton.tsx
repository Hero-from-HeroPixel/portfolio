import { PropsWithChildren } from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement>{
index : number
}

export const DotButton = (props : Props ) => {
	const { children,index,...restProps  } = props;

	return (
		<button aria-label={`index ${index.toString()}`} type="button" {...restProps}>
			{children}
		</button>
	);
};