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
import {
	RichText,
	BlockControls,
	ColorPalette,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

import { TextControl } from '@wordpress/components';

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
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { kicker, headline, subdeck } = attributes;
	const blockProps = useBlockProps();

	console.log( attributes );

	const onChangeTextColor = ( textColor, propName ) => {
		setAttributes( { [ propName ]: textColor } );
	};

	return (
		<div>
			<InspectorControls key="setting">
				<div>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __(
								'Kicker Text color',
								'block-development-examples'
							) }
						</legend>
						<ColorPalette
							value={ attributes.kickerColour }
							onChange={ ( textColor ) =>
								onChangeTextColor( textColor, 'kickerColour' )
							}
						/>
					</fieldset>
				</div>
				<div>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __(
								'Headline Text color',
								'block-development-examples'
							) }
						</legend>
						<ColorPalette
							value={ attributes.headlineColour }
							onChange={ ( textColor ) =>
								onChangeTextColor( textColor, 'headlineColour' )
							}
						/>
					</fieldset>
				</div>
			</InspectorControls>

			<RichText
				{ ...blockProps }
				tagName="h5"
				className={ 'kicker' }
				style={ {
					backgroundColor: attributes.kickerColour,
				} }
				value={ attributes.kicker }
				allowedFormats={ [] }
				onChange={ ( kicker ) => setAttributes( { kicker } ) }
				placeholder={ __( 'Kicker...' ) }
				disableLineBreaks
			/>
			<RichText
				{ ...blockProps }
				tagName="h1"
				className={ 'headline' }
				style={ {
					color: attributes.headlineColour,
				} }
				value={ attributes.headline }
				allowedFormats={ [] }
				onChange={ ( headline ) => setAttributes( { headline } ) }
				placeholder={ __( 'Headline...' ) }
				disableLineBreaks
			/>
			<RichText
				{ ...blockProps }
				tagName="h3"
				className={ 'subdeck' }
				value={ attributes.subdeck }
				allowedFormats={ [] }
				onChange={ ( subdeck ) => setAttributes( { subdeck } ) }
				placeholder={ __( 'Subdeck...' ) }
				disableLineBreaks
			/>
		</div>
	);
}
