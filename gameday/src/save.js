import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content { ...blockProps } tagName="h3" value={ attributes.kicker } />
			<RichText.Content { ...blockProps } tagName="h1" value={ attributes.headline } />
			<RichText.Content { ...blockProps } tagName="p" value={ attributes.subdeck } />
		</div>
	);
}
