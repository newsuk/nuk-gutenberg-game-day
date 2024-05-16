import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { kicker, headline, subdeck } = attributes;
	return (
		<>
			<RichText.Content
				{ ...useBlockProps.save() }
				tagName="h2"
				value={ kicker }
			/>
			<RichText.Content
				{ ...useBlockProps.save() }
				tagName="h1"
				value={ headline }
			/>
			<RichText.Content
				{ ...useBlockProps.save() }
				tagName="p"
				value={ subdeck }
			/>
		</>
	);
}
