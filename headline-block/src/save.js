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
export default function save( props ) {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<>
			<RichText.Content
				{ ...blockProps }
				tagName="h2"
				className="kicker"
				value={ attributes.kicker }
			/>
			<RichText.Content
				{ ...blockProps }
				tagName="h2"
				className="headline"
				value={ attributes.headline }
			/>
			<RichText.Content
				{ ...blockProps }
				tagName="h2"
				className="subdeck"
				value={ attributes.subdeck }
			/>
		</>
	);
}
