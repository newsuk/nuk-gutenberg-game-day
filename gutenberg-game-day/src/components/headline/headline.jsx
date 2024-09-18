import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, ColorPicker } from '@wordpress/components';

const Headline = props => {
	const style = {
		backgroundColor: props.backgroundColor,
		color: props.textColor,
		textTransform: 'uppercase',
	}

	return (
		<>
			<TextControl
				label="Headline Text"
				style={{ ...style, ...{ border: props.text.length === props.maxLength ? '1px solid red' : '' } }}
				value={props.text}
				onChange={value => props.setHeadline(value)}
				maxLength={props.maxLength}
			/>
			<InspectorControls>
				<div>Headline Inspect Controls - Headline Text Colour</div>
				<ColorPicker
					color={props.textColor}
					onChange={newColor => props.setHeadlineTextColor(newColor)}
					enableAlpha
				/>
			</InspectorControls>
		</>
	)
}

export default Headline;
