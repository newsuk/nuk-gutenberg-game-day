/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content className="question" tagName="h3" value={ attributes.question } />
			<form className="answer-form">
				<div className="answer-container">
					<input className="answer-input" type="text" placeholder="Enter your answer"/>
				</div>
				<div className="button-container">
					<div className="button-grid">
						<input className="hint"
							   type="button"
							   placeholder="Get Hint"
							   id="hintbutton"
							   value="Get Hint"
						/>
						<input className="answer" type="button" placeholder="Submit" id="submitButton" value="ANSWER"
							   data-answer={attributes.solution}/>
					</div>
				</div>
			</form>

			<div>
				{attributes.hints.map((hint, index) => (
					<div
						className="hint"
						key={index}
						style={{ display: "none" }}
					>
						{hint}
					</div>
				))}
			</div>
		</div>
	);
}
