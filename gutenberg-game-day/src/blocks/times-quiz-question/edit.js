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
	TextareaControl,
	SelectControl,
} from "@wordpress/components";

export default function Edit(props) {
	console.log(props);
	const { attributes, setAttributes } = props;
	const updateChoices = (index, text) => {
		const choices = [...attributes.choices];
		choices[index] = { text };
		setAttributes({ choices });
	};
	const choicesOptions = attributes.choices.map((choice, index) => {
		return {
			label: choice.text ? choice.text : index,
			value: index,
		};
	});
	const updateAnswer = (value) => {
		setAttributes({ answer: value });
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
					<PanelRow className="answer">
						<SelectControl
							__nextHasNoMarginBottom
							onChange={updateAnswer}
							options={choicesOptions}
							label="Answer"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div>
				<p>{attributes.label ? "QUESTION" : ""}</p>
				<TextareaControl
					value={attributes.question}
					onChange={(value) => setAttributes({ question: value })}
					label="Question"
				/>
				{attributes.choices.map((choice, index) => (
					<TextControl
						key={index}
						value={choice.text}
						onChange={(value) => updateChoices(index, value)}
						label="Response choice"
						style={{
							backgroundColor:
								index == attributes.answer ? "#75B765" : "#F3F1E7",
							borderColor: index == attributes.answer ? "#75B765" : "#F3F1E7",
							textAlign: "center",
							padding: "20px",
							display: "block",
							height: "auto",
						}}
					/>
				))}
				<Button
					onClick={() =>
						setAttributes({ choices: [...attributes.choices, { text: "" }] })
					}
					label="Add choice"
					variant="primary"
					style={{ marginTop: "10px", marginBottom: "10px" }}
				>
					Add Choice
				</Button>
				<TextareaControl
					value={attributes.details}
					onChange={(value) => setAttributes({ details: value })}
					label="Answer details"
				/>
			</div>
		</div>
	);
}
