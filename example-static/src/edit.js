/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { useState } from "react";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({
	attributes: { kicker, headline, subdeck },
	setAttributes,
}) {
	const onChangeKicker = (value) => {
		setAttributes({ kicker: value });
	};

	const onChangeHeadline = (value) => {
		setAttributes({ headline: value });
	};

	const onChangeSubdeck = (value) => {
		setAttributes({ subdeck: value });
	};

	return (
		<div {...useBlockProps()}>
			<RichText
				onChange={onChangeKicker}
				value={kicker}
				placeholder="Kicker"
				className="kicker"
			></RichText>
			<RichText
				onChange={onChangeHeadline}
				value={headline}
				placeholder="Headline"
				className="headline"
			></RichText>
			<RichText
				onChange={onChangeSubdeck}
				value={subdeck}
				placeholder="Subdeck"
				className="subdeck"
			></RichText>
		</div>
	);
}
