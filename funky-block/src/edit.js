import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			<div {...useBlockProps()}>
				<RichText tagName='h3' value={attributes.kickerText} onChange={text => setAttributes({ kickerText: text })} placeholder='Kicker Text' style={{ backgroundColor: attributes.kickerColour, color:'white' }} />
				<RichText tagName='h1' value={attributes.headlineText} onChange={text => setAttributes({ headlineText: text })} placeholder='Headline Text' style={{ color: attributes.headlineColour }} />
				<RichText tagName='h2' value={attributes.descriptionText} onChange={text => setAttributes({ descriptionText: text })} placeholder='Description Text' />
			</div>
			<InspectorControls>
				<PanelBody>
					<PanelColorSettings __experimentalIsRenderedInSidebar title='Background colour' colorSettings={[
						{ value: attributes.kickerColour, label: "Kicker colour", onChange:(value) => setAttributes({ kickerColour: value }) },
						{ value: attributes.headlineColour, label: "Headline colour", onChange:(value) => setAttributes({ headlineColour: value }) }
					]}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
