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
	const [featuredMedia, setFeaturedMedia] = useState(null);

	const handleDropEvent = (event) => {
		const postData = JSON.parse(event.dataTransfer.getData("application/json"));
		const atts = { postId: postData.id };
		setAttributes(atts)
	}

	useEffect(() => {
		const fetchPost = async () => {
			if(attributes && attributes.postId) {
				const post = await apiFetch({path: `/wp/v2/posts/${attributes.postId}?_embedded`});
				if(post) {
					setPost(post);

					if(post.featured_media) {
						const featuredMedia = await apiFetch({path: `/wp/v2/media/${post.featured_media}`});
						if (featuredMedia) {
							setFeaturedMedia(featuredMedia)
						}
					}
				}
			}
		};

		post === null && fetchPost();
	});

	return (
		<>
			<p {...useBlockProps()}>
				{post ? (<>{featuredMedia ? (<img src={featuredMedia.source_url} />) : null}<div>{post.title.rendered}</div></>) : <div>Drop an article here</div>}
				<DropZone
					onDrop={handleDropEvent}
				/>
			</p>
		</>
	);
}
