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

	const onChangeAttribute = (value) => {
		setAttributes({ kicker: value });
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
					className="kicker"
					value={kicker}
					placeholder="Add kicker text..."
					onChange={(value) => onChangeAttribute(value)}
					style={{
						color: kickerFontColor,
						backgroundColor: kickerBackgroundColor,
					}}
					allowedFormats={
						[
							"core/bold",
							"core/italic",
							"core/underline",
							"core/strikethrough",
							"core/link",
						]
					}
				/>
				<RichText
					className="headline"
					value={headline}
					placeholder="Add Headline text..."
					onChange={(value) => onChangeAttribute(value)}
					style={{
						color: headlineFontColor,
						backgroundColor: headlineBackgroundColor,
					}}
					allowedFormats={
						[
							"core/bold",
							"core/italic",
							"core/underline",
							"core/strikethrough",
							"core/link",
						]
					}
				/>
				<RichText
					className="subdeck"
					value={subdeck}
					placeholder="Add Subline text..."
					onChange={(value) => onChangeAttribute(value)}
					style={{
						color: subdeckFontColor,
					}}
					allowedFormats={
						[
							"core/bold",
							"core/italic",
							"core/underline",
							"core/strikethrough",
							"core/link",
						]
					}
				/>
			</div>
		</>
	);
}
