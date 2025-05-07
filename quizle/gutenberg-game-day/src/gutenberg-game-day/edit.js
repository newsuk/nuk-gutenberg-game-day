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
	PanelBody,
	PanelRow,
} from "@wordpress/components";

import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {

	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const updateMetaValues = ( metaAttributes ) => {
		setMeta( { ...meta, ...metaAttributes } );
	};

	const setMetaAttributes = (attributes) => {
		updateMetaValues( attributes );
		setAttributes( attributes );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title="Form Settings" initialOpen={false}>
					<PanelRow>
						<TextControl
							label="Answer"
							onChange={(solution) => setMetaAttributes({ solution: solution })}
							value={meta.solution}
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
										const hints = meta.hints;
										hints[index] = hint;
										setMetaAttributes({ hints });
									}}
									value={meta.hints[index]}
								/>
							</PanelRow>
						))}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<RichText
					className="question"
					tagName="h3"
					value={meta.question}
					allowedFormats={["core/bold", "core/italic"]}
					onChange={(question) => setMetaAttributes({question})}
					placeholder="Question here..."
				/>
				<div className="answer-form">

					<div className="answer-container">
					<input
						className="answer-input"
						type="text"
						placeholder="Enter your answer"
						disabled="disabled"
					/>
					</div>
					<div className="button-container">
						<div className="button-grid">
							<input
								className="hint"
								type="button"
								placeholder="Get Hint"
								id="hintbutton"
								value="Get Hint"
								disabled="disabled"
							/>
							<input
								className="answer"
								type="button"
								placeholder="Submit"
								value="ANSWER"
								id="submitButton"
								data-answer={meta.solution}
								disabled="disabled"
							/>
						</div>
					</div>
				</div>
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
