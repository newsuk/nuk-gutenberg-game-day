/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useState } from 'react';
import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { Notice, ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { kicker, headline, subdeck, headlineColour, kickerBackgroundColour, is90sMode } = attributes;
	const [showKickerWarning, setShowKickerWarning] = useState(false);
	const [showHeadlineWarning, setShowHeadlineWarning] = useState(false);
	const [showSubdeckWarning, setShowSubdeckWarning] = useState(false);

	function setKicker ( newKicker ) {
		if (newKicker.length > 20) {
			setShowKickerWarning(true);
			return
		}

		setShowKickerWarning(false);
		setAttributes( { kicker: newKicker } )
	}

	function setHeadline ( newHeadline ) {
		if (newHeadline.length > 80) {
			setShowHeadlineWarning(true);
			return
		}

		setShowHeadlineWarning(false);
		setAttributes( { headline: newHeadline } )
	}

	function setSubdeck ( newSubdeck ) {
		if (newSubdeck.length > 150) {
			setShowSubdeckWarning(true);
			return
		}

		setShowSubdeckWarning(false);
		setAttributes( { subdeck: newSubdeck } )
	}

	return (
		<div
			{...useBlockProps()}
			className={is90sMode ? 'nineties-mode' : ''}
		>
			<InspectorControls>
				<PanelColorSettings
					title={__('Kicker Background Colour', 'gutenberg-game-day')}
					colorSettings={
						[
							{
								value: kickerBackgroundColour ,
								onChange: (newColour) => setAttributes({kickerBackgroundColour: newColour}),
								label: __('Kicker Background Colour', 'gutenberg-game-day')

							}
						]
					}
				/>
				<PanelColorSettings
					title={__('Headline Colour', 'gutenberg-game-day')}
					colorSettings={
						[
							{
								value: headlineColour,
								onChange: (newColour) => setAttributes({headlineColour: newColour}),
								label: __('Headline Colour', 'gutenberg-game-day')

							}
						]
					}
				/>
				<ToggleControl
					label="90s Mode"
					checked={is90sMode}
					onChange={(newIs90sMode) => setAttributes({is90sMode: newIs90sMode})}
					className={'gutenberg-game-day-nineties-toggle'}
				/>
			</InspectorControls>
			<div className={'wp-block-create-block-gutenberg-game-day'}>
				{showKickerWarning && (
					<Notice status="warning" isDismissible={false}>
						{__('The kicker cannot exceed 20 characters.', 'gutenberg-game-day')}
					</Notice>
				)}
				<RichText
					id={'gutenberg-game-day-kicker'}
					className={'gutenberg-game-day-richtext'}
					tagName="h4"
					value={kicker}
					onChange={(newKicker) => setKicker(newKicker)}
					placeholder={__('Add a kicker', 'gutenberg-game-day')}
					style={{backgroundColor: kickerBackgroundColour}}
				/>
				{showHeadlineWarning && (
					<Notice status="warning" isDismissible={false}>
						{__('The headline cannot exceed 80 characters.', 'gutenberg-game-day')}
					</Notice>
				)}
				<RichText
					id={'gutenberg-game-day-headline'}
					className={'gutenberg-game-day-richtext'}
					tagName="h2"
					value={headline}
					onChange={(newHeadline) => setHeadline(newHeadline)}
					placeholder={__('Add a headline', 'gutenberg-game-day')}
					style={{color: headlineColour}}
				/>
				<div className={'gutenberg-game-day-faces-group'}>
					<img
						src={"https://www.staging-thesun.co.uk/wp-content/uploads/2024/05/Joel.png"}
						className={'gutenberg-game-day-faces dvd-screensaver'}
					/>
					<img
						src={"https://www.staging-thesun.co.uk/wp-content/uploads/2024/05/Umer.png"}
						className={'gutenberg-game-day-faces dvd-screensaver'}
					/>
					<img
						src={"https://www.staging-thesun.co.uk/wp-content/uploads/2024/05/Jack.png"}
						className={'gutenberg-game-day-faces dvd-screensaver'}
					/>
				</div>
				{showSubdeckWarning && (
					<Notice status="warning" isDismissible={false}>
						{__('The subdeck cannot exceed 150 characters.', 'gutenberg-game-day')}
					</Notice>
				)}
				<RichText
					id={'gutenberg-game-day-subdeck'}
					className={'gutenberg-game-day-richtext'}
					tagName="h3"
					value={subdeck}
					onChange={(newSubdeck) => setSubdeck(newSubdeck)}
					placeholder={__('Add a subdeck', 'gutenberg-game-day')}
				/>
			</div>
		</div>
	);
}
