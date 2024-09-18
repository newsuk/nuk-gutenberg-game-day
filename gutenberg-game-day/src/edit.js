import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from "@wordpress/block-editor";
import "./editor.scss";
import { SelectControl } from "@wordpress/components";

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
	const FontSizeSelector = ({ fontSize, setFontSize }) => {
		const fontSizes = [
			{ label: "Small", value: "12px" },
			{ label: "Normal", value: "16px" },
			{ label: "Large", value: "24px" },
			{ label: "Extra Large", value: "32px" },
		];

		return (
			<SelectControl
				label={__("Font Size", "gutenberg-game-day")}
				value={fontSize}
				options={fontSizes}
				onChange={(size) => {
					setFontSize(size);
				}}
			/>
		);
	};

	const onChangeAttribute = (kickerValue, headlineValue, subdeckValue) => {
		setAttributes({
			kicker: kickerValue,
			headline: headlineValue,
			subdeck: subdeckValue,
		});
	};

	return (
		<>
			<InspectorControls>
				<FontSizeSelector
					setFontSize={(size) => {
						setAttributes({ fontSize: size });
						console.log("Selected font size:", size);
					}}
				/>
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
					onChange={(kickerValue) =>
						onChangeAttribute(kickerValue, headline, subdeck)
					}
					style={{
						color: kickerFontColor,
						backgroundColor: kickerBackgroundColor,
					}}
					allowedFormats={[]}
				/>
				<RichText
					value={headline}
					placeholder="Add Headline text..."
					onChange={(headlineValue) =>
						onChangeAttribute(kicker, headlineValue, subdeck)
					}
					style={{
						color: headlineFontColor,
						backgroundColor: headlineBackgroundColor,
					}}
					allowedFormats={[]}
				/>
				<RichText
					value={subdeck}
					placeholder="Add Subline text..."
					onChange={(subdeckValue) =>
						onChangeAttribute(kicker, headline, subdeckValue)
					}
					style={{
						color: subdeckFontColor,
					}}
					allowedFormats={[]}
				/>
			</div>
		</>
	);
}
