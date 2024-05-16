import {
	RichText,
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { dispatch } from "@wordpress/data";
import "./editor.scss";

const KICKER_MAX_LEN = 20;
const HEADLINE_MAX_LEN = 80;
const DESC_MAX_LEN = 150;

export default function Edit({ attributes, setAttributes }) {

	const { kickerText, kickerColour, headlineText, headlineColour, descriptionText } = attributes;

	const handleChange = (charLimit, attributeName, textValue) => {
		if (textValue.length > charLimit) {
			dispatch("core/notices").createErrorNotice(
				`This string has more than ${charLimit} characters`
			);
		}
		setAttributes({
			[attributeName]: textValue.substring(0, charLimit),
		});
	};
	return (
		<>
			<div {...useBlockProps()}>
				<RichText
					tagName="h3"
					className='kicker-text'
					value={kickerText}
					onChange={(text) => handleChange(KICKER_MAX_LEN, "kickerText", text)}
					placeholder="Kicker Text"
					style={{ backgroundColor: kickerColour, color: "white" }}
				/>
				<RichText
					tagName="h1"
					value={headlineText}
					onChange={(text) =>
						handleChange(HEADLINE_MAX_LEN, "headlineText", text)
					}
					placeholder="Headline Text"
					style={{ color: headlineColour }}
				/>
				<RichText
					tagName="p"
					value={descriptionText}
					onChange={(text) =>
						handleChange(DESC_MAX_LEN, "descriptionText", text)
					}
					placeholder="Description Text"
				/>
			</div>
			<InspectorControls>
				<PanelBody>
					<PanelColorSettings
						__experimentalIsRenderedInSidebar
						title="Background colour"
						colorSettings={[
							{
								value: kickerColour,
								label: "Kicker colour",
								onChange: (value) => setAttributes({ kickerColour: value }),
							},
							{
								value: headlineColour,
								label: "Headline colour",
								onChange: (value) => setAttributes({ headlineColour: value }),
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
