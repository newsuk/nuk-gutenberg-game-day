import { RichText } from "@wordpress/block-editor";
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { text, color, backgroundColor } = attributes;

	const style = {
		color,
		backgroundColor
	}


	return (
		<RichText.Content { ...useBlockProps.save({ style }) } value={text} tagName="span" />
	);
}
