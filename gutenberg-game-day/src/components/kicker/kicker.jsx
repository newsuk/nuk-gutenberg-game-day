import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, ColorPicker } from '@wordpress/components';

const Kicker = props => {
	const style = {
		backgroundColor: props.backgroundColor,
		color: props.textColor,
		textTransform: 'uppercase',
	}

	return (
		<>
			<TextControl
				label="Kicker Text"
				style={{ ...style, ...{ border: props.text.length === props.maxLength ? '1px solid red' : '' } }}
				value={props.text}
				onChange={value => props.setKicker(value)}
				maxLength={props.maxLength}
			/>
			<InspectorControls>
				<div>Kicker Inspect Controls - Kicker Background</div>
				<ColorPicker
					color={props.backgroundColor}
					onChange={newColor => props.setKickerBackgroundColor(newColor)}
					enableAlpha
				/>
				<div>Kicker Inspect Controls - Kicker Text Color</div>
				<ColorPicker
					color={props.textColor}
					onChange={newColor => props.setKickerTextColor(newColor)}
					enableAlpha
				/>
			</InspectorControls>
		</>
	)
}

export default Kicker;
