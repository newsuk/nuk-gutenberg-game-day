import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	return (
		<div { ...useBlockProps.save() }>
			{/* <RichText.Content { ...blockProps } className='kicker'  style={{ backgroundColor: attributes.kickerHex, color: attributes.kickerDark ? '#fff' : '#000', borderRadius: '15px', margin: '0', padding: '15px', display: 'inline-flex', fontSize: 'small' }} tagName="h3" value={ attributes.kicker } /> */}
			<RichText.Content { ...blockProps } className='kicker' style={{ backgroundColor: attributes.kickerHex, color: attributes.kickerDark ? '#fff' : '#000' }} tagName="h3" value={ attributes.kicker } />
			<RichText.Content { ...blockProps } className='headline' style={{ color: attributes.headlineHex, width: '80%' }} tagName="h1" value={ attributes.headline } />
			<RichText.Content { ...blockProps } style={{ color: attributes.subdeckHex }} tagName="p" value={ attributes.subdeck } />
		</div>
	);
}
