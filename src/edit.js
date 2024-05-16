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
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
    RichText
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
	attributes: { headline, customHeadlineColour, kicker, customKickerBackgroundColour, subdeck },
	setAttributes,
    headlineColour,
    kickerBackgroundColour,
    setKickerBackgroundColour,
    setHeadlineColour,
	context: { postType, postId },
    style,
    clientId
} ) {
    const colorGradientSettings = useMultipleOriginColorsAndGradients();

	const blockProps = useBlockProps();

    const kickerColourDropdown = (
        <ColorGradientSettingsDropdown
            settings={ [ {
                label: __( 'Kicker Background', 'devblog' ),
                colorValue: kickerBackgroundColour.color || customKickerBackgroundColour,
                onColorChange: ( value ) => {
                    setKickerBackgroundColour( value );
    
                    setAttributes( {
                        customKickerBackgroundColour: value
                    } );
                }
            } ] }
            panelId={ clientId }
            hasColorsOrGradients={ false }
            disableCustomColors={ false }
            __experimentalIsRenderedInSidebar
            { ...colorGradientSettings }
        />
    );

    const headlineColourDropdown = (
        <ColorGradientSettingsDropdown
            settings={ [ {
                label: __( 'Headline', 'devblog' ),
                colorValue: headlineColour.color || customHeadlineColour,
                onColorChange: ( value ) => {
                    setHeadlineColour( value );
    
                    setAttributes( {
                        customHeadlineColour: value
                    } );
                }
            } ] }
            panelId={ clientId }
            hasColorsOrGradients={ false }
            disableCustomColors={ false }
            __experimentalIsRenderedInSidebar
            { ...colorGradientSettings }
        />
    );
    

	return (
		<div { ...blockProps }>
            <InspectorControls group="color">
                { kickerColourDropdown }
                { headlineColourDropdown }
            </InspectorControls>
            <RichText
                { ...blockProps }
                tagName="div" // The tag here is the element output and editable in the admin
                value={ kicker } // Any existing content, either from the database or an attribute default
                allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange={ ( kicker ) => setAttributes( { kicker } ) } // Store updated content as a block attribute
                placeholder={ __( 'Kicker...' ) } // Display this text before any content has been added by the user
                className="kicker"
                style={{ backgroundColor: customKickerBackgroundColour, color: "#fff" }}
            />
            <RichText
                { ...blockProps }
                tagName="h2" // The tag here is the element output and editable in the admin
                value={ headline } // Any existing content, either from the database or an attribute default
                allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange={ ( headline ) => setAttributes( { headline } ) } // Store updated content as a block attribute
                placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
                className="headline"
                style={{ color: customHeadlineColour }}
            />
            <RichText
                { ...blockProps }
                tagName="p" // The tag here is the element output and editable in the admin
                value={ subdeck } // Any existing content, either from the database or an attribute default
                allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange={ ( subdeck ) => setAttributes( { subdeck } ) } // Store updated content as a block attribute
                placeholder={ __( 'Subdeck...' ) } // Display this text before any content has been added by the user
                className="subdeck"
                style={{ color: "#333" }}
            />
		</div>
	);
}

export default withColors( {
	kickerBackgroundColour: 'kicker-colour',
    headlineColour: 'headline-colour'
} )( Edit );