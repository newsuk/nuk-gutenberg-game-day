/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

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
	const {
		headline_content,
		kicker_content,
		kicker_bg_color,
		headline_text_color,
		subdeck_content
	} = attributes;
	
	return (
		<div {...useBlockProps.save({ className: "headline-block" })}>
			<p
				data-bg-color={kicker_bg_color}
				className="kicker"
				style={{
					backgroundColor: kicker_bg_color
				}}
			>
				<RichText.Content value={kicker_content} />
			</p>
			<h1
				data-text-color={headline_text_color}
				className="headline"
				style={{
					color: headline_text_color
				}}
			>
				<RichText.Content value={headline_content} />
			</h1>
			<p className="subdeck">
				<RichText.Content value={subdeck_content} />
			</p>
		</div>
	);
}
