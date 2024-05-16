import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content tagName='h3' value={attributes.kickerText} style={{ backgroundColor: attributes.kickerColour, color:'white' }} />
			<RichText.Content tagName='h1' value={attributes.headlineText} style={{ color: attributes.headlineColour }} />
			<RichText.Content tagName='h2' value={attributes.descriptionText} />
		</div>
	);
}
