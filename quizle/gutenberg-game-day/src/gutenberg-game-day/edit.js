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
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import {
	TextControl,
	ToggleControl,
	PanelBody,
	PanelRow,
} from "@wordpress/components";

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
		<>
			<InspectorControls>
				<PanelBody title="Form Settings" initialOpen={false}>
					<PanelRow>
						<TextControl
							label="Answer"
							onChange={(solution) => setAttributes({ solution: solution })}
							value={attributes.solution}
						/>
					</PanelRow>

					{Array(4)
						.fill()
						.map((hint, index) => (
							<PanelRow>
								<TextControl
									key={index}
									label={`Hint ${index + 1}`}
									onChange={(hint) => {
										const hints = attributes.hints;
										hints[index] = hint;
										setAttributes({ hints });
									}}
									value={attributes.hints[index]}
								/>
							</PanelRow>
						))}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<RichText
					tagName="h3"
					value={attributes.question}
					allowedFormats={["core/bold", "core/italic"]}
					onChange={(question) => setAttributes({ question })}
					placeholder="Question here..."
				/>
				<input
					type="text"
					placeholder="Enter your answer"
					disabled="disabled"
				/>
				<input
					type="button"
					placeholder="Submit"
					value="Submit"
					data-answer={attributes.solution}
					disabled="disabled"
				/>

				{/* <RichText
					tagName="p"
					value={ attributes.solution }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					onChange={ ( solution ) => setAttributes( { solution } ) }
					placeholder="Solution here..."
				/> */}
			</div>
		</>
	);
}
