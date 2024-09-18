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
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { DropZone,
	TextControl,
	PanelBody,
	CheckboxControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { useEffect, useState } from "react";
import apiFetch from "@wordpress/api-fetch";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const [post, setPost] = useState(null);
	const [featuredMedia, setFeaturedMedia] = useState(null);

	const handleDropEvent = (event) => {
		const postData = JSON.parse(event.dataTransfer.getData("application/json"));
		const atts = { postId: postData.id };
		setAttributes(atts);
		fetchPost(atts.postId)
	};

	const fetchPost = async (postId) => {
		if (postId) {
			const post = await apiFetch({
				path: `/wp/v2/posts/${postId}?_embedded`,
			});
			if (post) {
				setPost(post);

				if (post.featured_media) {
					const featuredMedia = await apiFetch({
						path: `/wp/v2/media/${post.featured_media}`,
					});
					if (featuredMedia) {
						setFeaturedMedia(featuredMedia);
					}
				}
			}
		}
	};

	useEffect(() => {
		post === null && fetchPost(attributes.postId);
	});

	return (
		<>
			<div {...useBlockProps()}>
				{post ? (
					<>
						<div
							style={{
								display: "row",
								display: "column",
								alignItems: "center",
							}}
						>
							{featuredMedia && attributes.showImage ? (
								<div style={{ flex: "1 1 0", position: "parent" }}>
									<img
										style={{
											objectFit: "contain",
											maxWidth: "100%",
											maxHeight: "100%",
										}}
										src={featuredMedia.source_url}
									/>
								</div>
							) : null}
							<div
								style={{ flex: "1 1 0", padding: "0 8px", fontSize: "12px" }}
							>
								{post.title.rendered}
							</div>
						</div>
					</>
				) : (
					<div>Drop an article here</div>
				)}
				<DropZone onDrop={handleDropEvent} />
			</div>


			<InspectorControls>
				<PanelBody title={__("Articles")}>
					<CheckboxControl
						label="Show Image"
						checked={attributes.showImage}
						onChange={(showImage) => setAttributes({ showImage })}
					/>
				</PanelBody>

			</InspectorControls>
		</>
	);
}
