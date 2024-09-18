import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {

	const { kicker, kickerBackgroundColor, kickerFontColor } = attributes;

	console.log('kicker', kicker);

	const onChangeAttribute = (value) => {
		setAttributes({kicker: value});
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Kicker Styling', 'gutenberg-game-day')}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: kickerBackgroundColor,
							onChange: (color) => setAttributes({kickerBackgroundColor: color}),
							label: __('Background Color', 'gutenberg-game-day'),
						},
						{
							value: kickerFontColor,
							onChange: (color) => setAttributes({kickerFontColor: color}),
							label: __('Text Color', 'gutenberg-game-day'),
						},
					]}
				>
					<ContrastChecker
						textColor={kickerFontColor}
						backgroundColor={kickerBackgroundColor}
					/>
				</PanelColorSettings>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<RichText
					value={kicker}
					placeholder='Add kicker text...'
					onChange={(value) => onChangeAttribute(value)}
					style={{color: kickerFontColor, backgroundColor: kickerBackgroundColor}}
					allowedFormats={[]}
				/>
			</div>
		</>
	);
}
