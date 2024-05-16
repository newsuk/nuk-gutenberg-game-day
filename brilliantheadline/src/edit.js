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
				help={`${kicker.length}/20`}
				value={ kicker } 
				onChange={ ( value ) => setAttributes( { kicker: value } ) }
				maxLength="20"
				style={{backgroundColor: kickerBackgroundColour}}
				className='kicker-input'
				placeholder='Add kicker here'
			/>
			<TextControl
				placeholder='Brilliant headline here'
				help={`${headline.length}/80`}
				value={ headline }
				onChange={ ( value ) => setAttributes( { headline: value } ) }
				maxLength="80"
				className='headline-input'
				style={{color: headlineTextColour}}
			/>
			<TextareaControl
				placeholder='Add your subdeck here'
				help={`${subdeck.length}/150`}
				value={ subdeck }
				onChange={ ( value ) => setAttributes( { subdeck: value } ) }
				className='subdeck-input'
				maxLength="150"
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
