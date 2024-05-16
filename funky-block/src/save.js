import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	return (
		<p { ...useBlockProps.save() }>
			<RichText.Content tagName='h3' value={attributes.kickerText} />
			<RichText.Content tagName='h1' value={attributes.headlineText} />
			<RichText.Content tagName='h2' value={attributes.descriptionText} />
		</p>
	);
}
