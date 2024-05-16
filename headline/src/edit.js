/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {InspectorControls, RichText, useBlockProps, useSetting} from '@wordpress/block-editor';
import {ColorPalette, PanelBody, Notice} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {dispatch} from '@wordpress/data';
import {useState} from '@wordpress/element';

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

const Kicker = ({attributes, setAttributes, setError}) => {
	const colors = useSetting('color.palette');
	return (
		<>
			<RichText onChange={(value) => {
				// const trimmed = value.length > 10 ? value.substring(0, 10) : value
				setError(checkLength(value, 20))
				setAttributes({kicker: value})

			}
			} value={attributes.kicker} tagName="h3"
					  placeholder={
						  "Enter your kicker here..."
					  }
					  className="kicker"
					  style={{
						  backgroundColor: attributes.kickerBackgroundColor,
						  color: attributes.kickerColor,
					  }}
			/>
			<InspectorControls>
				<PanelBody
					title={__(
						'Kicker background and text color',
						'inspector-control-groups'
					)}
				>
					<span>Kicker background color</span>
					<ColorPalette
						label={"Kicker background color"}
						colors={colors}
						value={attributes.kickerBackgroundColor}
						onChange={(kickerBackgroundColor) => {
							setAttributes({kickerBackgroundColor})
						}}
					/>

					<span>Kicker text color</span>
					<ColorPalette
						label={"Kicker text color"}
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
		<><RichText onChange={(value) => {
				const trimmed = value.length > 200 ? value.substring(0, 200) : value
				setAttributes({headline: trimmed})
			}}
					  tagName="h1" className="headline"
					  value={attributes.headline} placeholder={"Enter your headline here..."}
					  style={{color: attributes.headlineColor}}
			/>
			<InspectorControls>
				<PanelBody
					title={__(
						'Headline color',
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

const checkLength = (value, limit) => {
	if (value.length > limit) {
		dispatch('core/editor').lockPostSaving()
		return `Error: Max length is ${limit} characters. Length is ${value.length}.`
	} else {
		dispatch('core/editor').unlockPostSaving()
		return null
	}
}

export default function Edit(props) {
	const {attributes, setAttributes} = props;

	const [error, setError] = useState(false)
	return (
		<div {...useBlockProps()}>
			{error && <Notice status="error" isDismissible={false}>{error}</Notice>}
			<Kicker {...props} setError={setError}/>
			<Headline {...props}/>
			<RichText onChange={(value) => {
				const trimmed = value.length > 400 ? value.substring(0, 400) : value
				setAttributes({subdeck: trimmed})
				}
			}
					  tagName="h3"
					  value={
						  attributes.subdeck}
					  className="subdeck"
					  placeholder={"Enter your subdeck here..."}
			/>
		</div>


	);
}
