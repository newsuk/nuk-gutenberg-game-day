/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	AlignmentControl,
	BlockControls,
	RichText,
	useBlockProps,
	store as blockEditorStore,
	HeadingLevelDropdown,
	useBlockEditingMode,
	InspectorControls,
	ColorPalette
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, onReplace }) {
	const { headline_content, headline_bg_color, headline_text_color } = attributes;

	const onHeadlineChange = (headline_content) => {
		setAttributes({
			headline_content
		});
	};
	const onChangeBGColor = ( hexColor ) => {
		setAttributes( { headline_bg_color: hexColor } );
	};

	const onChangeTextColor = ( hexColor ) => {
		setAttributes( { headline_text_color: hexColor } );
	};
	return (
		<>
			<InspectorControls key="setting">
				<div>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Background color", "block-development-examples")}
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={onChangeBGColor} // onChange event callback
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Text color", "block-development-examples")}
						</legend>
						<ColorPalette onChange={onChangeTextColor} />
					</fieldset>
				</div>
			</InspectorControls>
			<RichText
				tagName="h1"
				identifier="headline_content"
				onChange={onHeadlineChange}
				value={headline_content}
				placeholder="Headline"
				onReplace={onReplace}
				onRemove={() => onReplace([])}
				data-bg-color={headline_bg_color}
				data-text-color={headline_text_color}
				style={{ backgroundColor: headline_bg_color, color: headline_text_color }}
			/>
		</>
	);
}
