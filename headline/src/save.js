import {
	RichText,
} from '@wordpress/block-editor';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

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
		<div {...useBlockProps.save()}>
			<RichText.Content
				value={attributes.kicker}
				tagName="h3"
				className="kicker"
				style={{
					backgroundColor: attributes.kickerBackgroundColor,
					color: attributes.kickerColor,
				}}
			/>
			<RichText.Content
				tagName="h1"
				value={attributes.headline}
				className="headline"
				style={{color: attributes.headlineColor}}
			/>
			<RichText.Content
				tagName="h3"
				value={
					attributes.subdeck}
				className="subdeck"
			/>
		</div>
	);
}
