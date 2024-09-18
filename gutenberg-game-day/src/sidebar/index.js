import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";

import { useState, useEffect } from "react";
import apiFetch from "@wordpress/api-fetch";
import { Draggable, TextControl, PanelBody } from "@wordpress/components";

const Sidebar = () => {
	const [posts, setPosts] = useState(null);
	const [loading, setLoading] = useState(true);
	const [draggedPost, setDraggedPost] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await apiFetch({ path: "/wp/v2/posts" });
			console.log(posts);
			setPosts(posts);
			setLoading(false);
		};

		posts === null && fetchPosts();
	});

	const onDragStart = (event) => {
		event.dataTransfer = new DataTransfer();
		event.dataTransfer.setData("text/plain", "test");
		console.log(`t-dragData-${event.dataTransfer.getData("text")}`);
	};

	// onDraggableEnd = (event, item) => {
	// 	console.log("drag end", event);
	// 	console.log("drag end item", item);
	// };

	return (
		<>
			<PanelBody title={__("Articles")}>
				<TextControl
					__nextHasNoMarginBottom
					label="Search by article title"
					// help="Additional help text"
					// value={textField}
					// onChange={onChangeTextField}
				/>
			</PanelBody>
			<PanelBody>
				{loading ? (
					<p>Loading Posts...</p>
				) : (
					posts &&
					posts.map((post) => (
						<Draggable
							key={post.id}
							elementId={post.id}
							transferData={{ id: 1 }}
							appendToOwnerDocument={true}
						>
							{({ onDraggableStart, onDraggableEnd }) => (
								<div
									className="example-drag-handle"
									draggable
									onDragStart={(event) =>
										event.dataTransfer.setData(
											"application/json",
											JSON.stringify(post),
										)
									}
									onDragEnd={console.log}
								>
									<div
										style={{
											height: "60px",
											border: "1px solid gray",
											padding: "2px",
											marginBottom: "4px",
										}}
									>
										<span key={post.id}>{post.title.rendered}</span>
										<span
											style={{
												background: "#72d151",
												color: "white",
												display: "inline",
												fontSize: "12px",
												padding: "2px 8px",
												borderRadius: "50%",
											}}
										>
											P
										</span>
									</div>
								</div>
							)}
						</Draggable>
					))
				)}
			</PanelBody>
		</>
	);
};

registerPlugin("ggd-my-plugin-sidebar", {
	render: function () {
		return (
			<PluginSidebar
				name="my-plugin-sidebar"
				icon="admin-post"
				title="My plugin sidebar"
			>
				<Sidebar />
			</PluginSidebar>
		);
	},
});