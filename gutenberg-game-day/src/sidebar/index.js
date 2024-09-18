import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { addQueryArgs } from "@wordpress/url";

import { useState, useEffect } from "react";
import apiFetch from "@wordpress/api-fetch";
import { Draggable, TextControl, PanelBody } from "@wordpress/components";

const Sidebar = () => {
	const [query, setQuery] = useState("");
	const [posts, setPosts] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchPosts = async (query) => {
		setLoading(true);
		const posts = await apiFetch({ path: addQueryArgs( "/wp/v2/posts", { search: query }) });
		setPosts(posts);
		setLoading(false);
	};

	useEffect(() => {
		! loading && fetchPosts(query);
	}, [query]);

	useEffect(() => {
		fetchPosts();
	}, []);

	const onDragStart = (event) => {
		event.dataTransfer = new DataTransfer();
		event.dataTransfer.setData("text/plain", "test");
		console.log(`t-dragData-${event.dataTransfer.getData("text")}`);
	};

	return (
		<>
			<PanelBody title={__("Articles")}>
				<TextControl
					__nextHasNoMarginBottom
					label="Search by article title"
					// help="Additional help text"
					// value={textField}
					onChange={setQuery}
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
							{() => (
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
										<span
											style={{
												background: "#72d151",
												color: "white",
												display: "inline",
												fontSize: "12px",
												padding: "2px 6px",
												borderRadius: "50%",
												marginRight: "4px",
											}}
										>
											P
										</span>
										<span key={post.id}>{post.title.rendered}</span>
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
