import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody } from '@wordpress/components';
import { dispatch } from '@wordpress/data';


const maxLengthKicker = 20;
const maxLengthHeadline = 80;
const maxLengthDesc = 150;

export default function Edit({ attributes, setAttributes }) {
	const lengthChecker = function(charLimit,attributeName,textValue){
		if(
			textValue.length>charLimit
		){
			dispatch("core/notices").createErrorNotice(`This string has more than ${charLimit} characters`)
		}
		setAttributes(
			{
				[attributeName]:textValue.substring(0,charLimit)
			}
		)
	}
	return (
		<>
			<div {...useBlockProps()}>
				<RichText tagName='h3' value={attributes.kickerText} onChange={text => lengthChecker(maxLengthKicker,'kickerText',text)} placeholder='Kicker Text' style={{ backgroundColor: attributes.kickerColour, color:'white' }} />
				<RichText tagName='h1' value={attributes.headlineText} onChange={text => lengthChecker(maxLengthHeadline,'headlineText',text)} placeholder='Headline Text' style={{ color: attributes.headlineColour }} />
				<RichText tagName='p' value={attributes.descriptionText} onChange={text => lengthChecker(maxLengthDesc,'descriptionText',text)} placeholder='Description Text' />
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
