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
export default function save(props) {
	console.log('Save JS props: ', props); // Will show up in Editor, not live page

	const kickStyle = {
		backgroundColor: props.attributes.kickerBackgroundColor,
		color: props.attributes.kickerTextColor,
		textTransform: 'uppercase',
		width: 'fit-content',
	};

	console.log('kickStyle: ', kickStyle);

	const headlineStyle = {
		color: props.attributes.headlineTextColor,
		textTransform: 'uppercase',
	};

	const subdeckStyle = {
		color: props.attributes.subdeckTextColor,
	};

	return (
		<div { ...useBlockProps.save() }>
			{ 'Gutenberg Game Day – hello from the saved content!' }
			<br />
			<div style={kickStyle}>{props.attributes.kicker}</div>
			<div style={headlineStyle}>{props.attributes.headline}</div>
			<div style={subdeckStyle}>{props.attributes.subdeck}</div>
		</div>
	);
}
