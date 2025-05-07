/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content tagName="h3" value={ attributes.question } />
			<form>
				<input type="text" placeholder="Enter your answer" />
				<input type="button" placeholder="Submit" id="submitButton" value="Submit" data-answer={attributes.solution} />

				<input
					type="button"
					placeholder="Get Hint"
					id="hintButton"
					value="Get Hint"
					disabled="disabled"
				/>
			</form>
		</div>
	);
}
