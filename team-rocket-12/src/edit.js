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
import { TextControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div { ...useBlockProps() }>
			<TextControl
				label="Kicker"
				help="Add your kicker here"
				value={ attributes.kicker }
				maxLength="20"
				onChange={text => setAttributes({ kicker: text })}
				style={{ backgroundColor: attributes.kickerBackgroundColour, color:'red' }}
			/>
			<TextControl
				label="Headline"
				help="Add your headline here"
				value={ attributes.headline }
				maxLength="80"
				onChange={text => setAttributes({ headline: text })}
				style={{ color: attributes.headlineTextColour }}
			/>
			<TextControl
				label="Subdeck"
				help="Add your subdeck here"
				value={ attributes.subdeck }
				maxLength="150"
				onChange={text => setAttributes({ subdeck: text })}
			/>
		</div>
	);
}
