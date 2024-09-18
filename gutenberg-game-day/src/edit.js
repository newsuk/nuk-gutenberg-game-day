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
import { useBlockProps } from "@wordpress/block-editor";
import {
	DropZone,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import {useEffect, useState} from "react";
import apiFetch from "@wordpress/api-fetch";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	const [post, setPost] = useState(null);

	const handleDropEvent = (event) => {
		console.log(`t-drop --${JSON.stringify(event.dataTransfer.getData("text/plain"))}--`);
		const postData = event.dataTransfer.getData("text/plain");
		setAttributes({ postId: postData})
	}

	useEffect(() => {
		const fetchPost = async () => {
			const post = await apiFetch({ path: `/wp/v2/posts/${attributes.postId}` });
			console.log(post);
			setPost(post);
		};

		post === null && fetchPost();
	});

	return (
		<>
			<p {...useBlockProps()}>
				{__(
					"Gutenberg Game Day – hello from the editor!",
					"gutenberg-game-day",
				)}
				{post ? (<div>{post.title.rendered}</div>) : null}
				<DropZone
					onDrop={handleDropEvent}
				/>
			</p>
		</>
	);
}
