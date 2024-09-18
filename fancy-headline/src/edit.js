import { InspectorControls, PanelColorSettings, useBlockProps } from '@wordpress/block-editor';
import { RichText } from "@wordpress/block-editor";
import './editor.scss';
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";

export default function Edit({ attributes, setAttributes }) {
	const { text, color, backgroundColor, headline, headlineColor, subdeck, subdeckColor } = attributes;

	const KICKER_MAX_LENGTH = 20;

	const kickerStyle = {
		color,
		backgroundColor,
	};

	const headlineStyle = {
		color: headlineColor,
		fontSize: '400%',
	};


	const subdeckStyle = {
		color: subdeckColor,
	};

	const { createErrorNotice, removeAllNotices } = useDispatch('core/notices');
	const { lockPostSaving, unlockPostSaving } = useDispatch('core/editor');

	useEffect(() => {
		if(text.length < 4) {
			lockPostSaving();
			removeAllNotices();
			createErrorNotice(
				'Kicker length not long enough, it should be more than 3 characters.',
				{
					isDismissible: true,
				}
			);
		} else if(text.length > KICKER_MAX_LENGTH) {
			removeAllNotices();
			createErrorNotice(
				'Kicker max length is exceeded 20 characters.',
				{
					isDismissible: true,
				}
			);
			lockPostSaving();
		} else {
			removeAllNotices();
			unlockPostSaving();
		}

	}, [text]);

	return (
		<div {...useBlockProps()}>
			<RichText
				style={ kickerStyle }
				tagName="span"
				value={text}
				placeholder={__('Kicker...')}
				className="wp-block-team9-fancy-headline__kicker"
				onChange={(value) => setAttributes({ text: value })}
			/>

			<RichText
				style={ headlineStyle }
				tagName="h1"
				value={headline}
				placeholder={__('Headline...')}
				className="wp-block-team9-fancy-headline__headline"
				onChange={(value) => setAttributes({ headline: value })}
			/>

			<RichText
				style={ subdeckStyle }
				tagName="p"
				value={subdeck}
				placeholder={__('Subdeck...')}
				className="wp-block-team9-fancy-headline__subdeck"
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
						},
						{
							value: headlineColor,
							onChange: (value) => setAttributes({ headlineColor: value }),
							label: __('Headline Text Color'),
						},
						{
							value: subdeckColor,
							onChange: (value) => setAttributes({ subdeckColor: value }),
							label: __('Subdeck Text Color'),
						},
					]}
				/>
			</InspectorControls>
		</div>
	);
}
