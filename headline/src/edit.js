/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {InspectorControls, RichText, useBlockProps, useSetting} from '@wordpress/block-editor';
import {ColorPalette, PanelBody} from '@wordpress/components';
import {__} from '@wordpress/i18n';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

const Kicker = ({attributes, setAttributes}) => {
	const colors = useSetting('color.palette');
	return (
		<>
			<RichText onChange={(kicker) => setAttributes({kicker})} value={attributes.kicker} tagName="h3"
					  placeholder={
						  "Enter your kicker here..."
					  } className="kicker"
						style={{color: attributes.kickerColor}}
			/>
			<InspectorControls>
				<PanelBody
					title={__(
						'Custom Block Controls',
						'inspector-control-groups'
					)}
				>
					<ColorPalette
						colors={colors}
						value={attributes.kickerColor}
						onChange={(kickerColor) => {
							setAttributes({kickerColor})
						}}
					/>

				</PanelBody>
			</InspectorControls>
		</>
	)
}

const Headline = ({attributes, setAttributes}) => {
	const colors = useSetting('color.palette');
	return (
		<>
		<RichText onChange={(headline) => setAttributes({headline})} tagName="h2" className="headline"
				  value={attributes.headline} placeholder={"Enter your headline here..."} style={{color: attributes.headlineColor}}
		/>
			<InspectorControls>
				<PanelBody
					title={__(
						'Custom Block Controls',
						'inspector-control-groups'
					)}
				>
					<ColorPalette
						colors={colors}
						value={attributes.headlineColor}
						onChange={(headlineColor) => {
							setAttributes({headlineColor})
						}}
					/>

				</PanelBody>
			</InspectorControls>
		</>
	)
}


export default function Edit(props) {
	const {attributes, setAttributes} = props;

	return (
		<div {...useBlockProps()}>
			<Kicker {...props}/>
			<Headline {...props}/>
			<RichText onChange={(subdeck) => setAttributes({subdeck})}
					  tagName="h3"
					  value={
						  attributes.subdeck}
					  className="subdeck"
					  placeholder={"Enter your subdeck here..."}
					  style={{color: attributes.color}}
			/>
		</div>


	);
}
