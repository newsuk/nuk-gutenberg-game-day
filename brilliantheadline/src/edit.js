/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { TextControl, TextareaControl, PanelBody } from '@wordpress/components';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {kicker, headline, subdeck, kickerBackgroundColour, headlineTextColour} = attributes;
	return (
		<div { ...useBlockProps() }>
			<TextControl
				label="Kicker"
				value={ kicker }
				onChange={ ( value ) => setAttributes( { kicker: value } ) }
				maxLength="20"
			/>
			<TextControl
				label="Headline"
				value={ headline }
				onChange={ ( value ) => setAttributes( { headline: value } ) }
			/>
			<TextareaControl
				label="Subdeck"
				help="Add your subdeck here"
				value={ subdeck }
				onChange={ ( value ) => setAttributes( { subdeck: value } ) }
			/>
			<InspectorControls>
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					title={ __( 'Color' ) }
					colorSettings={ [
						{
							value: kickerBackgroundColour,
							onChange: ( value ) => setAttributes( { kickerBackgroundColour: value } ),
							label: __( 'Kicker background colour' ),
						},
						{
							value: headlineTextColour,
							onChange: ( value ) => setAttributes( { headlineTextColour: value } ),
							label: __( 'Headline text colour' ),
						}
					] }
				/>
			</InspectorControls>
		</div>
	);
}
