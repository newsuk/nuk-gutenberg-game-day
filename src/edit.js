import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( {attributes, setAttributes } ) {
	const { kicker, headline, subdeck } = attributes;
	return (
		<>
			<RichText
				{ ...useBlockProps }
				onChange={ ( value ) => setAttributes( { kicker: value } ) }
				value={ kicker }
				placeholder={ __( 'Your Text', 'eyecatcher' ) }
				tagName="h2"
				allowedFormats={ [ 'core/bold' ] }
			/>
			<RichText
				{ ...useBlockProps }
				onChange={ ( value ) => setAttributes( { headline: value } ) }
				value={ headline }
				placeholder={ __( 'Your Headline', 'eyecatcher' ) }
				tagName="h1"
				allowedFormats={ [ 'core/bold' ] }
			/>
			<RichText
				{ ...useBlockProps }
				onChange={ ( value ) => setAttributes( { subdeck: value } ) }
				value={ subdeck }
				placeholder={ __( 'Your Subdeck', 'eyecatcher' ) }
				tagName="p"
				allowedFormats={ [ 'core/bold' ] }
			/>
		</>
	);
}
