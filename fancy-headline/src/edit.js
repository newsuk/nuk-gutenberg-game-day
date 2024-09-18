import { InspectorControls, PanelColorSettings, useBlockProps } from '@wordpress/block-editor';
import { RichText } from "@wordpress/block-editor";
import './editor.scss';
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";

export default function Edit({ attributes, setAttributes }) {
	const { text, color, backgroundColor, headline, headlineColor, headlineBackgroundColor, subdeck, subdeckColor, subdeckBackgroundColor } = attributes;

	const KICKER_MAX_LENGTH = 20;

	const kickerStyle = {
		color,
		backgroundColor,
	};

	const headlineStyle = {
		color: headlineColor,
		fontSize: '400%',
		marginTop: '10px',
	};


	const subdeckStyle = {
		color: subdeckColor,
		fontSize: '150%',
		marginTop: '10px',
	};

	const { createNotice } = useDispatch('core/notices');
	const { lockPostSaving, unlockPostSaving } = useDispatch('core/editor');

	useEffect(() => {
		if (text.length < 3) {
			lockPostSaving();
			createNotice(
				'error',
				'Kicker length is not right',
				{ isDismissible: true }
			);
		}

		if (text.length > KICKER_MAX_LENGTH) {
			createNotice(
				'error',
				'Kicker max length is exceeded',
				{ isDismissible: true }
			);
			lockPostSaving();
		} else {
			unlockPostSaving();
		}
	}, [text]);

	return (
		<>
			<RichText
				{...useBlockProps({ style: kickerStyle })}
				tagName="p"
				value={text}
				placeholder={__('Kicker...')}
				onChange={(value) => setAttributes({ text: value })}
			/>

			<RichText
				{...useBlockProps({ style: headlineStyle })}
				tagName="p"
				value={headline}
				placeholder={__('Headline...')}
				onChange={(value) => setAttributes({ headline: value })}
			/>
			
			<RichText
				{...useBlockProps({ style: subdeckStyle })}
				tagName="h2"
				value={subdeck}
				placeholder={__('Subdeck...')}
				onChange={(value) => setAttributes({ subdeck: value })}
			/>

			<InspectorControls>
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					title={__('Kicker Color Settings')}
					colorSettings={[
						{
							value: color,
							onChange: (value) => setAttributes({ color: value }),
							label: __('Text Color'),
						},
						{
							value: backgroundColor,
							onChange: (value) => setAttributes({ backgroundColor: value }),
							label: __('Background Color'),
						}
					]}
				/>
			</InspectorControls>

			<InspectorControls>
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					title={__('Headline Color Settings')}
					colorSettings={[
						{
							value: headlineColor,
							onChange: (value) => setAttributes({ headlineColor: value }),
							label: __('Headline Text Color'),
						},
					]}
				/>
			</InspectorControls>

			<InspectorControls>
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					title={__('Subdeck Color Settings')}
					colorSettings={[
						{
							value: subdeckColor,
							onChange: (value) => setAttributes({ subdeckColor: value }),
							label: __('Subdeck Text Color'),
						},
					]}
				/>
			</InspectorControls>
		</>
	);
}
