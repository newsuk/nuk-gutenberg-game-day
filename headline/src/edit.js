/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

import { useState } from 'react';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText} from '@wordpress/block-editor';

import {Notice} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const kickerIsValid = (kickerValue) => {
	return kickerValue.length <= 20;
}

const headlineIsValid = (headlineValue) => {
	return headlineValue.length <= 80;
}

const subdeckIsValid = (subdeckValue) => {
	return subdeckValue.length <= 150;
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const [kickerValid, setKickerValid] = useState(true);
	const [headlineValid, setHeadlineValid] = useState(true);
	const [subdeckValid, setSubdeckValid] = useState(true);

	const {
		attributes,
		setAttributes,
	} = props;
	const {
		headlineText,
		kickerText,
		subdeckText
	} = attributes;

	return (
		<div {...useBlockProps()}>
			{!kickerValid ?
				<Notice status="error">
					<p>
						Max length of the kicker is 20 characters long.
					</p>
				</Notice>
				: null}
			<div>
				<RichText
					aria-label={__('Kicker text')}
					placeholder={__('Add Kicker…')}
					value={kickerText}
					onChange={(value) => {
						const isKickerValid = kickerIsValid(value);
						setKickerValid(isKickerValid);
						if (isKickerValid) {
							setAttributes({
								kickerText: value,
							});
						}
					}
					}></RichText>
			</div>
			{!headlineValid ?
				<Notice status="error">
					<p>
						Max length of the headline is 80 characters long.
					</p>
				</Notice>
				: null}
			<h2>
				<RichText
					aria-label={__('Headline text')}
					placeholder={__('Add headline…')}
					value={headlineText}
					onChange={(value) => {
						const isHeadlineValid = headlineIsValid(value);
						setHeadlineValid(isHeadlineValid);
						if (isHeadlineValid) {
							setAttributes({
								headlineText: value,
							});
						}
					}
					}
				></RichText>
			</h2>
			{!subdeckValid ?
				<Notice status="error">
					<p>
						Max length of the subdeck is 150 characters long.
					</p>
				</Notice>
				: null}
			<div>
				<RichText
					aria-label={__('Subdeck text')}
					placeholder={__('Add subdeck…')}
					value={subdeckText}
					onChange={(value) => {
						const isSubdeckValid = subdeckIsValid(value);
						setSubdeckValid(isSubdeckValid);
						if (isSubdeckValid) {
							setAttributes({
								subdeckText: value,
							});
						}
					}
					}
				></RichText>
			</div>
		</div>
	)
		;
}
