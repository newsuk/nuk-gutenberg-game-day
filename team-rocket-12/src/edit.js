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
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {
	useBlockProps,
	RichText,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';

import {
	TextControl,
	ToggleControl,
	PanelBody,
	PanelRow,
	SelectControl,
	ColorPicker,
} from '@wordpress/components';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({});
	// define the onChange functions
	const onChangeHeaderBackgroundColor = ( val ) => {
		setAttributes( { kickerBackgroundColour: val } );
	};
	const onChangeHeaderHeadingColor = ( val ) => {
		setAttributes( { headlineTextColour: val } );
	};
	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Header settings' ) }
					colorSettings={ [
						{
							value: attributes.kickerBackgroundColour,
							onChange: onChangeHeaderBackgroundColor,
							label: __( 'Background color ' ),
						},
						{
							value: attributes.headlineTextColour,
							onChange: onChangeHeaderHeadingColor,
							label: __( 'Heading color' ),
						},
					] }
				/>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<RichText
					{ ...blockProps }
					tagName="div"
					placeholder={ __( 'Add your kicker here...', 'basic-block' ) }
					label="Kicker"
					value={ attributes.kicker }
					maxLength="20"
					onChange={text => setAttributes({ kicker: text })}
					style={{
						"--header-bg-color": attributes.kickerBackgroundColour,
					}}
				/>
				<RichText
					{ ...blockProps }
					tagName="div"
					placeholder={ __( 'Add your headline here...', 'basic-block' ) }
					label="Headline"
					value={ attributes.headline }
					maxLength="80"
					onChange={text => setAttributes({ headline: text })}
					style={{
						"--header-heading-color": attributes.headlineTextColour,
					}}
				/>
				<RichText
					{ ...blockProps }
					tagName="div"
					placeholder={ __( 'Add your subdeck here...', 'basic-block' ) }
					label="Subdeck"
					value={ attributes.subdeck }
					maxLength="150"
					onChange={text => setAttributes({ subdeck: text })}
				/>
			</div>
		</>
	);
}
