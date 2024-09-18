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
import { useState, useEffect } from "react";
import apiFetch from "@wordpress/api-fetch";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	Draggable,
	Panel,
	TextControl,
	PanelBody,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const [posts, setPosts] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await apiFetch({ path: "/wp/v2/posts" });
			console.log(posts);
			setPosts(posts);
			setLoading(false);
		};

		posts === null && fetchPosts();
	});

	return (
		<>
			<p {...useBlockProps()}>
				{__(
					"Gutenberg Game Day – hello from the editor!",
					"gutenberg-game-day",
				)}
			</p>
			<InspectorControls>
				<PanelBody title={__("Articles")}>
					<TextControl
						__nextHasNoMarginBottom
						label="Search by article title"
						// help="Additional help text"
						// value={textField}
						// onChange={onChangeTextField}
					/>
					<div>
						<Panel>
							<PanelBody>
								{loading && <p>Loading...</p>}
								{posts &&
									posts.map((post) => (
										<Draggable
											key={post.id}
											elementId={post.id}
											transferData={{}}
										>
											{({ onDraggableStart, onDraggableEnd }) => (
												<div
													className="example-drag-handle"
													draggable
													onDragStart={onDraggableStart}
													onDragEnd={onDraggableEnd}
												>
													<p key={post.id}>{post.title.rendered}</p>
												</div>
											)}
										</Draggable>
									))}
							</PanelBody>
						</Panel>
					</div>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
