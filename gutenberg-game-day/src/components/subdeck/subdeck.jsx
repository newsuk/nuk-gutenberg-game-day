import { InspectorControls } from '@wordpress/block-editor';
import { TextareaControl, ColorPicker } from '@wordpress/components';

const Subdeck = props => {
	const style = {
		backgroundColor: props.backgroundColor,
		color: props.textColor,
	}

	return (
		<>
			<TextareaControl
				label="Subdeck Text"
				style={{ ...style, ...{ border: props.text.length === props.maxLength ? '1px solid red' : '' } }}
				value={props.text}
				onChange={value => props.setSubdeck(value)}
				maxLength={props.maxLength}
			/>
			<InspectorControls>
				<div>Subdeck Inspect Controls - Subdeck Text Color</div>
				<ColorPicker
					color={props.textColor}
					onChange={newColor => props.setSubdeckTextColor(newColor)}
					enableAlpha
				/>
			</InspectorControls>
		</>
	)
}

export default Subdeck;
