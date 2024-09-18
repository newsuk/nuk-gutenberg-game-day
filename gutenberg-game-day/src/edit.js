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
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

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

import {
	ToggleControl,
	PanelRow,
	PanelBody,
	Button,
	TextControl,
} from "@wordpress/components";

export default function Edit(props) {
	console.log(props);
	const { attributes, setAttributes } = props;
	const updateChoices = (index, text) => {
		const choices = [...attributes.choices];
		choices[index] = { text };
		setAttributes({ choices });
	};
	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<PanelBody title="Settings">
					<PanelRow>
						<ToggleControl
							checked={attributes.label}
							label="Show Label"
							onChange={() => setAttributes({ label: !attributes.label })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div>
				<p>{attributes.label ? "QUESTION" : ""}</p>
				<p>Example Question</p>
				{attributes.choices.map((choice, index) => (
					<TextControl
						key={index}
						value={choice.text}
						onChange={(value) => updateChoices(index, value)}
					/>
				))}
				<Button
					onClick={() =>
						setAttributes({ choices: [...attributes.choices, { text: "" }] })
					}
				>
					Add Choice
				</Button>
			</div>
		</div>
	);
}
