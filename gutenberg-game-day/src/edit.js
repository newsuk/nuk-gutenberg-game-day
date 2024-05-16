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
import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { kicker, headline, subdeck, headlineColour, kickerBackgroundColour } = attributes;

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelColorSettings
					title={__('Headline Colour', 'gutenberg-game-day')}
					colorSettings={
					[
						{
							value: headlineColour,
							onChange: (newColour) => setAttributes({ headlineColour: newColour }),
							label: __('Headline Colour', 'gutenberg-game-day')

						}
					]
					}
				/>
				<PanelColorSettings
					title={__('Kicker Background Colour', 'gutenberg-game-day')}
					colorSettings={
						[
							{
								value: kickerBackgroundColour,
								onChange: (newColour) => setAttributes({ kickerBackgroundColour: newColour }),
								label: __('Kicker Background Colour', 'gutenberg-game-day')

							}
						]
					}
				/>
			</InspectorControls>
			<RichText
				tagName="h4"
				value={ kicker }
				onChange={ ( newKicker ) => setAttributes( { kicker: newKicker } ) }
				placeholder={ __( 'Add a kicker', 'gutenberg-game-day' ) }
				style={{backgroundColor: kickerBackgroundColour}}
			/>
			<RichText
				tagName="h2"
				value={ headline }
				onChange={ ( newHeadline ) => setAttributes( { headline: newHeadline } ) }
				placeholder={ __( 'Add a headline', 'gutenberg-game-day' ) }
				style={{color: headlineColour}}
			/>
			<RichText
				tagName="h3"
				value={ subdeck }
				onChange={ ( newSubdeck ) => setAttributes( { subdeck: newSubdeck } ) }
				placeholder={ __( 'Add a subdeck', 'gutenberg-game-day' ) }
			/>
		</div>
	);
}
