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
		marginTop: '10px',
	};

	const subdeckStyle = {
		color: subdeckColor,
		fontSize: '150%',
		marginTop: '10px',
	};

	return (
		<>
			{/* Kicker */}
			<RichText.Content
				{...useBlockProps.save({ style: kickerStyle })}
				value={text}
				tagName="p"
			/>

			{/* Headline */}
			<RichText.Content
				{...useBlockProps.save({ style: headlineStyle })}
				value={headline}
				tagName="p"
			/>

			{/* Subdeck */}
			<RichText.Content
				{...useBlockProps.save({ style: subdeckStyle })}
				value={subdeck}
				tagName="h2"
			/>
		</>
	);
}
