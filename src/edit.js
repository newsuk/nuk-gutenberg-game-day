import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, PanelColorSettings, ContrastChecker } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( {attributes, setAttributes } ) {
	const {
		kicker,
		kickerBackgroundColor,
		kickerTextColor,
		headline,
		headlineBackgroundColor,
		headlineTextColor,
		subdeck
	} = attributes;

	const kickerColorUpdate = ( type, color ) => {
		if ( type === 'bg' ) {
			setAttributes( { kickerBackgroundColor: color } );
		}
		if ( type === 'text' ) {
			setAttributes( { kickerTextColor: color } );
		}
	};

	const headlineColorUpdate = ( type, color ) => {
		if ( type === 'bg' ) {
			setAttributes( { headlineBackgroundColor: color } );
		}
		if ( type === 'text' ) {
			setAttributes( { headlineTextColor: color } );
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Kicker Styling', 'eyecatcher' ) }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: kickerBackgroundColor,
							onChange: (color) => kickerColorUpdate('bg', color),
							label: __( 'Background Color', 'eyecatcher' ),
						},
						{
							value: kickerTextColor,
							onChange:  (color) => kickerColorUpdate('text', color),
							label: __( 'Text Color', 'eyecatcher' ),
						},
					] }
				>
					<ContrastChecker
						textColor={ kickerTextColor }
						backgroundColor={ kickerBackgroundColor }
					/>
				</PanelColorSettings>
				<PanelColorSettings
					title={ __( 'Headline Styling', 'eyecatcher' ) }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: headlineBackgroundColor,
							onChange: (color) => headlineColorUpdate('bg', color),
							label: __( 'Background Color', 'eyecatcher' ),
						},
						{
							value: headlineTextColor,
							onChange: (color) => headlineColorUpdate('text', color),
							label: __( 'Text Color', 'eyecatcher' ),
						},
					] }
				>
					<ContrastChecker
						textColor={ headlineTextColor }
						backgroundColor={ headlineBackgroundColor }
					/>
				</PanelColorSettings>
			</InspectorControls>
			<RichText
				{ ...useBlockProps }
				onChange={ ( value ) => setAttributes( { kicker: value } ) }
				value={ kicker }
				placeholder={ __( 'kicker', 'eyecatcher' ) }
				tagName="h2"
				allowedFormats={ [ 'core/bold' ] }
				style={{color: kickerTextColor, backgroundColor: kickerBackgroundColor}}
			/>
			<RichText
				{ ...useBlockProps }
				onChange={ ( value ) => setAttributes( { headline: value } ) }
				value={ headline }
				placeholder={ __( 'Add Headline', 'eyecatcher' ) }
				tagName="h1"
				allowedFormats={ [ 'core/bold' ] }
				style={{color: headlineTextColor, backgroundColor: headlineBackgroundColor}}
			/>
			<RichText
				{ ...useBlockProps }
				onChange={ ( value ) => setAttributes( { subdeck: value } ) }
				value={ subdeck }
				placeholder={ __( 'Add Subdeck', 'eyecatcher' ) }
				tagName="p"
				allowedFormats={ [ 'core/bold' ] }
			/>
		</>
	);
}
