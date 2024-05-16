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
	RichText,
	InspectorControls,
	PanelColorSettings
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
	const {
		headline_content,
		kicker_content,
		kicker_bg_color,
		headline_text_color,
		subdeck_content
	} = attributes;

	const onHeadlineChange = (headline_content) => {
		if(headline_content.text.length > 80){
			return
		};
		setAttributes({
			headline_content
		});
	};

	const onKickerChange = (kicker_content) => {
		if(kicker_content.text.length > 20){
			return;
		};
		setAttributes({
			kicker_content
		});
	};

	const onSubdeckChange = (subdeck_content) => {
		if (subdeck_content.text.length > 150) {
			return;
		}
		setAttributes({
			subdeck_content
		});
	};

	const handleTextColorChange = (color) => {
		setAttributes({
			headline_text_color: color
		});
	}

	const handleBackgroundColorChange = (color) => {
		setAttributes({
			kicker_bg_color: color
		});
	}

	return (
		<div>
			<InspectorControls>
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					title={__("Color")}
					colorSettings={[
						{
							value: kicker_bg_color,
							onChange: handleBackgroundColorChange,
							label: __("Kicker Background")
						},
						{
							value: headline_text_color,
							onChange: handleTextColorChange,
							label: __("Headline Text")
						}
					]}
				/>
			</InspectorControls>

			<RichText
				tagName="p"
				identifier="kicker_content"
				onChange={onKickerChange}
				className="kicker"
				value={kicker_content}
				placeholder="Enter kicker..."
				onReplace={onReplace}
				onRemove={() => onReplace([])}
				data-bg-color={kicker_bg_color}
				style={{
					backgroundColor: kicker_bg_color
				}}
			/>
			<RichText
				tagName="h1"
				identifier="headline_content"
				onChange={onHeadlineChange}
				value={headline_content}
				placeholder="Enter headline..."
				onReplace={onReplace}
				onRemove={() => onReplace([])}
				data-text-color={headline_text_color}
				style={{
					color: headline_text_color
				}}
			/>
			<RichText
				tagName="p"
				identifier="subdeck_content"
				onChange={onSubdeckChange}
				className="subdeck"
				value={subdeck_content}
				placeholder="Enter subdeck..."
				onReplace={onReplace}
				onRemove={() => onReplace([])}
			/>
		</div>
	);
}
