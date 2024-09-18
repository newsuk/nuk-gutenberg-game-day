import { RichText } from "@wordpress/block-editor";
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { text, color, backgroundColor, headline, headlineColor, headlineBackgroundColor, subdeck, subdeckColor, subdeckBackgroundColor } = attributes;

	const kickerStyle = {
		color,
		backgroundColor,
	};

	const headlineStyle = {
		color: headlineColor,
		fontSize: '400%',
	};

	const subdeckStyle = {
		color: subdeckColor,
	};

	return (
		<div {...useBlockProps.save()}>
			{/* Kicker */}
			<RichText.Content
				style= { kickerStyle }
				className={"wp-block-team9-fancy-headline__kicker"}
				value={text}
				tagName="span"
			/>

			{/* Headline */}
			<RichText.Content
				style= { headlineStyle }
				className={"wp-block-team9-fancy-headline__headline"}
				value={headline}
				tagName="h1"
			/>

			{/* Subdeck */}
			<RichText.Content
				style= { subdeckStyle }
				className={"wp-block-team9-fancy-headline__subdeck"}
				value={subdeck}
				tagName="p"
			/>
		</div>
	);
}
