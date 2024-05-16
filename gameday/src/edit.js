import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import { TextControl, ColorPicker, PanelBody, ColorPalette, FormToggle } from '@wordpress/components'
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes, isSelected }) {
	const blockProps = useBlockProps();

	const [toggle, setToggle] = useState(false);

	const MAX_KICKER_LENGTH = 20;
	const MAX_HEADLINE_LENGTH = 80;
	const MAX_SUBDECK_LENGTH = 150;

	const { kicker, headline, subdeck } = attributes;

	const isInvalid =
		(kicker || '').length > MAX_KICKER_LENGTH
		|| (headline || '').length > MAX_HEADLINE_LENGTH
		|| (subdeck || '').length > MAX_SUBDECK_LENGTH;

	const onChangeKicker = (kicker) => {
		if ((kicker || '').length > MAX_KICKER_LENGTH) return;
		const limitInput = kicker.substring(0, MAX_KICKER_LENGTH);
		setAttributes({ kicker: kicker });
	}

	const onChangeHeadline = (headline) => {
		if ((headline || '').length > MAX_HEADLINE_LENGTH) return;
		const limitInput = headline.substring(0, MAX_HEADLINE_LENGTH);
		setAttributes({ headline: headline });
	}

	const onChangeSubdeck = (subdeck) => {
		if ((subdeck || '').length > MAX_SUBDECK_LENGTH) return;
		const limitInput = subdeck.substring(0, MAX_SUBDECK_LENGTH);
		setAttributes({ subdeck: subdeck });
	}
	
	const onHexChange = (attribute, hexCode) => {
		setAttributes({ [attribute]: hexCode });
	}
	
	const onToggle = (value) => {
		const newValue = !toggle;
		setToggle(newValue);
		setAttributes({ kickerDark: newValue });
	};

	const onKickerHexChange = (hexCode) => onHexChange('kickerHex', hexCode);
	const onHeadlineHexChange = (hexCode) => onHexChange('headlineHex', hexCode);
	const onSubdeckHexChange = (hexCode) => onHexChange('subdeckHex', hexCode);

	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<div>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __(
								'Kicker Background Colour',
								'block-development-examples'
							) }
						</legend>
						<ColorPicker onChange={onKickerHexChange} />
						<FormToggle checked={toggle} onChange={onToggle} />
					</fieldset>

					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Headline Colour', 'block-development-examples' ) }
						</legend>
						<ColorPicker
							onChange={onHeadlineHexChange}
						/>
					</fieldset>

					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Subdeck Colour', 'block-development-examples' ) }
						</legend>
						<ColorPicker
							onChange={onSubdeckHexChange}
						/>
					</fieldset>

				</div>
			</InspectorControls>

			<div style={{ backgroundColor: `${attributes.kickerHex}`, color: attributes.kickerDark ? '#fff' : '#000'  }}>
				<RichText style={{ backgroundColor: `${attributes.kickerHex}` }} { ...blockProps } className={isInvalid ? 'invalid input' : 'input'} tagName="h3" onChange={onChangeKicker} value={ kicker } allowedFormats={[]} />
			</div>
			<span><em>
				{`${Math.max(MAX_KICKER_LENGTH - (kicker || '').length, 0)} / ${MAX_KICKER_LENGTH}`}
			</em></span>

			<div style={{ 'color': `${attributes.headlineHex}` }}>
				<RichText { ...blockProps } className={isInvalid ? 'invalid input' : 'input'} tagName="h1" onChange={onChangeHeadline} value={ headline } allowedFormats={[ 'core/bold' ]} />
			</div>
			<span><em>{`${Math.max(MAX_HEADLINE_LENGTH - (headline || '').length, 0)} / ${MAX_HEADLINE_LENGTH}`}</em></span>

			<div style={{ 'color': `${attributes.subdeckHex}` }}>
				<RichText { ...blockProps } className={isInvalid ? 'invalid input' : 'input'} tagName="p" onChange={onChangeSubdeck} value={ subdeck } allowedFormats={[]} />
			</div>
			<span><em>{`${Math.max(MAX_SUBDECK_LENGTH - (subdeck || '').length, 0)} / ${MAX_SUBDECK_LENGTH}`}</em></span>
		</div>
	);
}
