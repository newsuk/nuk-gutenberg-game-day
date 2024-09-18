import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		kicker,
		kickerBackgroundColor,
		kickerFontColor,
		headline,
		headlineBackgroundColor,
		headlineFontColor,
		subdeck,
		subdeckFontColor,
	} = attributes;

	// console.log("kicker", kicker);

	const onChangeAttribute = (value, value2, value3) => {
		setAttributes({ kicker: value, headline: value2, subdeck: value3 });
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__("Kicker Styling", "gutenberg-game-day")}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: kickerBackgroundColor,
							onChange: (color) =>
								setAttributes({ kickerBackgroundColor: color }),
							label: __("Background Color", "gutenberg-game-day"),
						},
						{
							value: kickerFontColor,
							onChange: (color) => setAttributes({ kickerFontColor: color }),
							label: __("Text Color", "gutenberg-game-day"),
						},
					]}
				>
					<ContrastChecker
						textColor={kickerFontColor}
						backgroundColor={kickerBackgroundColor}
					/>
				</PanelColorSettings>
				<PanelColorSettings
					title={__("headline Styling", "gutenberg-game-day")}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: headlineBackgroundColor,
							onChange: (color) =>
								setAttributes({ headlineBackgroundColor: color }),
							label: __("Background Color", "gutenberg-game-day"),
						},
						{
							value: headlineFontColor,
							onChange: (color) => setAttributes({ headlineFontColor: color }),
							label: __("Text Color", "gutenberg-game-day"),
						},
					]}
				>
					<ContrastChecker
						textColor={headlineFontColor}
						backgroundColor={headlineBackgroundColor}
					/>
				</PanelColorSettings>
				<PanelColorSettings
					title={__("subdeck Styling", "gutenberg-game-day")}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: subdeckFontColor,
							onChange: (color) => setAttributes({ subdeckFontColor: color }),
							label: __("Text Color", "gutenberg-game-day"),
						},
					]}
				>
					<ContrastChecker textColor={subdeckFontColor} />
				</PanelColorSettings>
			</InspectorControls>
			<div {...useBlockProps()}>
				<RichText
					value={kicker}
					placeholder="Add kicker text..."
					onChange={(value) => onChangeAttribute(value)}
					style={{
						color: kickerFontColor,
						backgroundColor: kickerBackgroundColor,
					}}
					allowedFormats={[]}
				/>
				<RichText
					value={headline}
					placeholder="Add Headline text..."
					onChange={(value) => onChangeAttribute(value2)}
					style={{
						color: headlineFontColor,
						backgroundColor: headlineBackgroundColor,
					}}
					allowedFormats={["core/bold"]}
				/>
				<RichText
					value={subdeck}
					placeholder="Add Subline text..."
					onChange={(value) => onChangeAttribute(value3)}
					style={{
						color: subdeckFontColor,
					}}
					allowedFormats={[]}
				/>
			</div>
		</>
	);
}
