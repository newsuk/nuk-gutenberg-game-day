// Image component
import { useEffect, useState } from "react";
import apiFetch from "@wordpress/api-fetch";


export default function Image( { id, width } ) {
	const [url, setUrl] = useState(null);

	useEffect(() => {
		const fetchImage = async () => {
			const image = await apiFetch({
				path: `/wp/v2/media/${id}`,
			});
			if (image) {
				setUrl(image.source_url);
			}
		};

		fetchImage();
	}, [id]);

	return (
		<div>
			<img src={url} width={width} draggable={false} />
		</div>
	);
}
