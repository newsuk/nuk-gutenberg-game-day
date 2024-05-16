/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

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
		const {kicker, headline, subdeck, kickerBackgroundColour, headlineTextColour} = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<p className="kicker" style={{backgroundColor: kickerBackgroundColour}}>
				{kicker}
			</p>
			<h1 style={{color: headlineTextColour}}>
				{headline}
			</h1>
			<p className="subdeck">
				{subdeck}
			</p>
		</div>
	);
}
