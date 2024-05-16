import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const { kickerText, kickerColour, headlineText, headlineColour, descriptionText } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<RichText.Content
				className="kicker-text"
				tagName="h3"
				value={kickerText}
				style={{ backgroundColor: kickerColour, color: "white" }}
			/>
			<RichText.Content
				tagName="h1"
				value={headlineText}
				style={{ color: headlineColour }}
			/>
			<RichText.Content tagName="p" value={descriptionText} />
		</div>
	);
}
