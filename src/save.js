/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( {attributes} ) {
	const blockProps = useBlockProps.save()
	return (
		<div { ... blockProps }>
			<RichText.Content className="kicker"  tagName="div" value={ attributes.kicker } style={{ backgroundColor: attributes.customKickerBackgroundColour, color: "#fff" }} />
			<RichText.Content className="headline"  tagName="h2" value={ attributes.headline } style={{ color: attributes.customHeadlineColour }} />
			<RichText.Content className="subdeck"  tagName="p" value={ attributes.subdeck } style={{ color: "#333" }}/>
		</div>
	);
}
