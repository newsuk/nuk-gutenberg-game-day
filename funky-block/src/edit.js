import { __ } from '@wordpress/i18n';

import { RichText, useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({attributes,setAttributes}) {
	return (
		<div { ...useBlockProps() }>
			<RichText tagName='h3' value={attributes.kickerText} onChange={text => setAttributes({kickerText:text})} placeholder='Kicker Text' />
			<RichText tagName='h1' value={attributes.headlineText} onChange={text => setAttributes({headlineText:text})} placeholder='Headline Text' />
			<RichText tagName='h2' value={attributes.descriptionText} onChange={text => setAttributes({descriptionText:text})} placeholder='Description Text' />
		</div>
	);
}
