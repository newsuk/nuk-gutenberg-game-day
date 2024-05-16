import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content
				value={ attributes.kicker }
				tagName="h3"
				className="kicker"
				style={ {
					backgroundColor: attributes.kickerBackgroundColor,
					color: attributes.kickerColor,
				} }
			/>
			<RichText.Content
				tagName="h1"
				value={ attributes.headline }
				className="headline"
				style={ { color: attributes.headlineColor } }
			/>
			<RichText.Content
				tagName="h3"
				value={ attributes.subdeck }
				className="subdeck"
			/>
		</div>
	);
}
