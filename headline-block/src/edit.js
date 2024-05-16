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

	const onChangeTextColor = ( textColor ) => {
		return;
	};

	return (
		<div { ...blockProps }>
			<InspectorControls key="setting">
				<div>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __(
								'Kicker Text color',
								'block-development-examples'
							) }
						</legend>
						<ColorPalette onChange={ onChangeTextColor } />
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
						<ColorPalette onChange={ onChangeTextColor } />
					</fieldset>
				</div>
				<div>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __(
								'Subdeck Text color',
								'block-development-examples'
							) }
						</legend>
						<ColorPalette onChange={ onChangeTextColor } />
					</fieldset>
				</div>
			</InspectorControls>

			<TextControl
				label="Kicker"
				value={ kicker }
				onChange={ ( newContent ) =>
					setAttributes( { kicker: newContent } )
				}
			/>
			<TextControl
				label="Headline"
				value={ headline }
				onChange={ ( newContent ) =>
					setAttributes( { headline: newContent } )
				}
			/>
			<TextControl
				label="Subdeck"
				value={ subdeck }
				onChange={ ( newContent ) =>
					setAttributes( { subdeck: newContent } )
				}
			/>
		</div>
	);
}
