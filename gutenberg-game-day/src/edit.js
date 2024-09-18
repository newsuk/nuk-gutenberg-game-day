import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker
} from "@wordpress/block-editor";
import { Button, PanelBody } from "@wordpress/components";
import "./editor.scss";
import sectionJson from "./section.json";

export default function Edit({ attributes, setAttributes }) {
	const {
		sections
	} = attributes;

	const addSection = () => {
		const newSections = [...sections, sectionJson];
		setAttributes({ sections: newSections });
	};

	const onChangeAttribute = (index, key, value) => {
		const newSections = sections.map((section, i) => {
			if (i === index) {
				return { ...section, [key]: value };
			}
			return section;
		});
		setAttributes({ sections: newSections });
	};

	const removeSection = (index) => {
		const newSections = sections.filter((_, i) => i !== index);
		setAttributes({ sections: newSections });
	};

	return (
		<>
			<InspectorControls>
				{sections.map((section, index) => (
					<PanelBody title={`Section #${index + 1} Settings`} initialOpen={false} key={`section-settings-${index}`}>
						<PanelColorSettings
							title={__("Kicker Styling", "gutenberg-game-day")}
							icon="admin-appearance"
							initialOpen
							disableCustomColors={false}
							colorSettings={[
								{
									value: section.kickerBackgroundColor,
									onChange: (value) => onChangeAttribute(index, 'kickerBackgroundColor', value),
									label: __("Background Color", "gutenberg-game-day"),
								},
								{
									value: section.kickerFontColor,
									onChange: (value) => onChangeAttribute(index, 'kickerFontColor', value),
									label: __("Text Color", "gutenberg-game-day"),
								},
							]}
						>
							<ContrastChecker
								textColor={section.kickerFontColor}
								backgroundColor={section.kickerBackgroundColor}
							/>
						</PanelColorSettings>
						<PanelColorSettings
							title={__("Headline Styling", "gutenberg-game-day")}
							icon="admin-appearance"
							initialOpen
							disableCustomColors={false}
							colorSettings={[
								{
									value: section.headlineBackgroundColor,
									onChange: (value) => onChangeAttribute(index, 'headlineBackgroundColor', value),
									label: __("Background Color", "gutenberg-game-day"),
								},
								{
									value: section.headlineFontColor,
									onChange: (value) => onChangeAttribute(index, 'headlineFontColor', value),
									label: __("Text Color", "gutenberg-game-day"),
								},
							]}
						>
							<ContrastChecker
								textColor={section.headlineFontColor}
								backgroundColor={section.headlineBackgroundColor}
							/>
						</PanelColorSettings>
						<PanelColorSettings
							title={__("Subdeck Styling", "gutenberg-game-day")}
							icon="admin-appearance"
							initialOpen
							disableCustomColors={false}
							colorSettings={[
								{
									value: section.subdeckFontColor,
									onChange: (value) => onChangeAttribute(index, 'subdeckFontColor', value),
									label: __("Text Color", "gutenberg-game-day"),
								},
							]}
						>
							<ContrastChecker textColor={section.subdeckFontColor} />
						</PanelColorSettings>
					</PanelBody>
				))}
			</InspectorControls>
			<div {...useBlockProps()}>
				{sections.map((section, index) => (
					<div key={`section-${index}`} className="secion-container">
						<div className="section-label">
							<RichText
								className="label"
								value={section.label}
								placeholder="Add label text..."
								onChange={(value) => onChangeAttribute(index, 'label', value)}
								allowedFormats={[]}
							/>
							<Button className="toggle-section" isSecondary onClick={() => onChangeAttribute(index, 'toggle', !section.toggle)}>
								{section.toggle ? 'Close' : 'Open'}
							</Button>
						</div>
						{section.toggle && (
							<div className="section-content">
								<RichText
									className="kicker"
									value={section.kicker}
									placeholder="Add kicker text..."
									onChange={(value) => onChangeAttribute(index, 'kicker', value)}
									style={{
										color: section.kickerFontColor,
										backgroundColor: section.kickerBackgroundColor,
									}}
									allowedFormats={[]}
								/>
								<RichText
									className="headline"
									value={section.headline}
									placeholder="Add Headline text..."
									onChange={(value) => onChangeAttribute(index, 'headline', value)}
									style={{
										color: section.headlineFontColor,
										backgroundColor: section.headlineBackgroundColor,
									}}
									allowedFormats={[]}
								/>
								<RichText
									className="subdeck"
									value={section.subdeck}
									placeholder="Add Subline text..."
									onChange={(value) => onChangeAttribute(index, 'subdeck', value)}
									style={{
										color: section.subdeckFontColor,
									}}
									allowedFormats={['core/bold']}
								/>
							</div>
						)}
						<Button className="remove-section" isSecondary onClick={() => removeSection(index)}>
							Remove Section
						</Button>
					</div>
				))}
				<Button onClick={addSection} isPrimary>Add New Section</Button>
			</div>
		</>
	);
}
