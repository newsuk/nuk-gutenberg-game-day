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
	const { headline_content, kicker_content, kicker_bg_color, headline_text_color } = attributes;

	const onHeadlineChange = (headline_content) => {
		setAttributes({
			headline_content
		});
	};
	const onKickerChange = (kicker_content) => {
		setAttributes({
			kicker_content
		});
	};

	const onChangeBGColor = (color) => {
		setAttributes({kicker_bg_color: color});
	};
	const onChangeTextColor = (color) => {
		setAttributes({headline_text_color: color});
	}
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
				tagName="p"
				identifier="kicker_content"
				onChange={onKickerChange}
				className="kicker"
				value={kicker_content}
				placeholder="Kicker"
				style={{
					backgroundColor: kicker_bg_color,
					textTransform: "uppercase"
				}}
			/>
			<RichText
				tagName="h1"
				identifier="headline_content"
				onChange={onHeadlineChange}
				value={headline_content}
				placeholder="Headline"
				onReplace={onReplace}
				onRemove={() => onReplace([])}
				style={{
					color: headline_text_color}}
			/>
		</>
	);
}
