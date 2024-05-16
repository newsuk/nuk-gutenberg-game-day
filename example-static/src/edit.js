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

import React, { useState } from "react";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({
	attributes: { kicker, headline, subdeck, kickerColor, headlineColor },
	setAttributes,
}) {
	const [count, setCount] = useState(0);
	const changeKickerColor = (color) => {
		setAttributes({ kickerColor: color });
	};

	const changeHeaderColor = (color) => {
		setAttributes({ headlineColor: color });
	};

	const onChangeKicker = (value) => {
		setCount(value.length);

		if (value.length <= 20) {
			setAttributes({ kicker: value });
		}
	};

	const onChangeHeadline = (value) => {
		if (value.length <= 80) {
			setAttributes({ headline: value });
		}
	};

	const onChangeSubdeck = (value) => {
		if (value.length <= 150) {
			setAttributes({ subdeck: value });
		}
	};

	return (
		<div {...useBlockProps()}>
			<div>
				<RichText
					onChange={onChangeKicker}
					value={kicker}
					placeholder="Kicker"
					className="kicker"
					style={{ backgroundColor: kickerColor || "green" }}
				></RichText>
				<button onClick={() => changeKickerColor("green")}>
					Change to Green Color
				</button>
				<button onClick={() => changeKickerColor("blue")}>
					Change to Blue Color
				</button>
				<button onClick={() => changeKickerColor("tomato")}>
					Change to Tomato Color
				</button>
			</div>
			<div>
				<RichText
					onChange={onChangeHeadline}
					value={headline}
					placeholder="Headline"
					className="headline"
					style={{ color: headlineColor || "green" }}
				></RichText>
				<button onClick={() => changeHeaderColor("green")}>
					Change to Green Color
				</button>
				<button onClick={() => changeHeaderColor("blue")}>
					Change to Blue Color
				</button>
				<button onClick={() => changeHeaderColor("tomato")}>
					Change to Tomato Color
				</button>
			</div>
			<RichText
				onChange={onChangeSubdeck}
				value={subdeck}
				placeholder="Subdeck"
				className="subdeck"
			></RichText>
			{count > 20 && (
				<p style={{ backgroundColor: "red" }}>
					Kicker length is more than 20 chars
				</p>
			)}
		</div>
	);
}
