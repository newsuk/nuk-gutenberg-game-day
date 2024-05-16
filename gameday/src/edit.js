import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import { TextControl, ColorPicker } from '@wordpress/components'
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes, isSelected }) {
	const blockProps = useBlockProps();

	console.log('>>> bp', blockProps);

	const MAX_KICKER_LENGTH = 20;
	const MAX_HEADLINE_LENGTH = 80;
	const MAX_SUBDECK_LENGTH = 150;

	const [kicker, setKicker] = useState('');
	const [headline, setHeadline] = useState('');
	const [subdeck, setSubdeck] = useState('');

	const isInvalid = kicker.length > MAX_KICKER_LENGTH || headline > MAX_HEADLINE_LENGTH || subdeck > MAX_SUBDECK_LENGTH;

	const onChangeKicker = (kicker) => {
		setKicker(kicker);
		setAttributes({
			...attributes,
			kicker,
		});
	}

	const onChangeHeadline = (headline) => {
		setHeadline(headline);
		setAttributes({
			...attributes,
			headline,
		});
	}

	const onChangeSubdeck = (subdeck) => {
		setSubdeck(subdeck);
		setAttributes({
			...attributes,
			subdeck,
		});
	}

	return (
		<div {...useBlockProps()}>
			<RichText { ...blockProps } className={isInvalid ? 'invalid input' : 'input'} tagName="h3" onChange={onChangeKicker} value={ kicker } />
			<span><em>{Math.max(MAX_KICKER_LENGTH - kicker.length, 0)}</em></span>
			<RichText { ...blockProps } className={isInvalid ? 'invalid input' : 'input'} tagName="h1" onChange={onChangeHeadline} value={ headline } />
			<span><em>{Math.max(MAX_HEADLINE_LENGTH - headline.length, 0)}</em></span>
			<RichText { ...blockProps } className={isInvalid ? 'invalid input' : 'input'} tagName="p" onChange={onChangeSubdeck} value={ subdeck } />
			<span><em>{Math.max(MAX_SUBDECK_LENGTH - subdeck.length, 0)}</em></span>
		</div>
	);
}
