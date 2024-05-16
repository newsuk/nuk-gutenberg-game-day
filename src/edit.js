import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( {attributes, setAttributes } ) {
	const {
		kicker,
		kickerBackgroundColor,
		kickerTextColor,
		headline,
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
		if ( type === 'text' ) {
			setAttributes( { headlineTextColor: color } );
		}
	};

	return (
		<div className='eyecatcher-container'>
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
							value: headlineTextColor,
							onChange: (color) => headlineColorUpdate('text', color),
							label: __( 'Text Color', 'eyecatcher' ),
						},
					] }
				>
					<ContrastChecker
						textColor={ headlineTextColor }
						backgroundColor={ '#FFFFFF' }
					/>
				</PanelColorSettings>
			</InspectorControls>
			<RichText
				{ ...useBlockProps }
				className='kicker'
				onChange={ ( value ) => setAttributes( { kicker: value } ) }
				value={ kicker }
				placeholder={ __( 'Add Kicker', 'eyecatcher' ) }
				tagName="h2"
				allowedFormats={ [ 'core/bold' ] }
				style={{color: kickerTextColor, backgroundColor: kickerBackgroundColor}}
			/>
			<RichText
				{ ...useBlockProps }
				className='headline'
				onChange={ ( value ) => setAttributes( { headline: value } ) }
				value={ headline }
				placeholder={ __( 'Add Headline', 'eyecatcher' ) }
				tagName="h1"
				allowedFormats={ [ 'core/bold' ] }
				style={{color: headlineTextColor}}
			/>
			<RichText
				{ ...useBlockProps }
				className='subdeck'
				onChange={ ( value ) => setAttributes( { subdeck: value } ) }
				value={ subdeck }
				placeholder={ __( 'Add Subdeck', 'eyecatcher' ) }
				tagName="p"
				allowedFormats={ [ 'core/bold' ] }
			/>
		</div>
	);
}
