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
	InspectorControls,
	useBlockProps,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
} from '@wordpress/block-editor';

import { __experimentalInputControl as InputControl } from '@wordpress/components';

import { useState } from 'react';

import { useEntityProp } from '@wordpress/core-data';


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
function Edit( {
	attributes: { headline, headlineColour, kicker, kickerBackgroundColour, subdeck },
	setAttributes,
	context: { postType, postId },
} ) {

	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<span>Character Limit Here</span>
			<InputControl
				label="Kicker"
				value={ kicker }
				onChange={ ( newKicker ) => setAttributes( {
					kicker: newKicker
				} ) }
			/>
			<InputControl
				label="Headline"
				value={ headline }
				onChange={ ( newHeadline ) => setAttributes( {
					headline: newHeadline
				} ) }
			/>
			<InputControl
				label="Subdeck"
				value={ subdeck }
				onChange={ ( newSubdeck ) => setAttributes( {
					subdeck: newSubdeck
				} ) }
			/>
		</div>
	);
}

export default withColors( {
	kickerBackgroundColour: 'kicker-colour',
    headlineColour: 'headline-colour'
} )( Edit );