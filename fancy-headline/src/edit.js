import {InspectorControls, PanelColorSettings, useBlockProps} from '@wordpress/block-editor';
import { RichText } from "@wordpress/block-editor";
import './editor.scss';
import {__} from "@wordpress/i18n";
import {useEffect} from "@wordpress/element";
import {useDispatch} from "@wordpress/data";

export default function Edit( { attributes, setAttributes } ) {
	const { text, color, backgroundColor } = attributes;

	const KICKER_MAX_LENGTH = 20;

	const style = {
		color,
		backgroundColor
	}

	const { createNotice } = useDispatch('core/notices');
	const { lockPostSaving, unlockPostSaving } = useDispatch('core/editor');

	useEffect(() => {
		if(text.length < 3) {
			lockPostSaving();
			createNotice(
				'error', // Can be one of: success, info, warning, error.
				'Kicker length is not right', // Text string to display.
				{
					isDismissible: true, // Whether the user can dismiss the notice.
				}
			);
		}

		if(text.length > KICKER_MAX_LENGTH) {
			createNotice(
				'error', // Can be one of: success, info, warning, error.
				'Kicker max length is exceeded', // Text string to display.
				{
					isDismissible: true, // Whether the user can dismiss the notice.
				}
			);

			lockPostSaving();
		} else {
			unlockPostSaving();
		}

	}, [text]);

	return (
		<>
			<RichText
				{...useBlockProps( { style })}
				tagName="span"
				value={text}
				placeholder={ __( 'Kicker...' ) }
				onChange={(value) => setAttributes({text: value})}
			/>

			<InspectorControls>
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					title={ __( 'Color' ) }
					colorSettings={ [
						{
							value: color,
							onChange: (value) => setAttributes({color: value}),
							label: __( 'Text Color' ),
						},
						{
							value: backgroundColor,
							onChange: (value) => setAttributes({backgroundColor: value}),
							label: __( 'Background Color' ),
						}
					] }
				/>
			</InspectorControls>
		</>
	);
}
