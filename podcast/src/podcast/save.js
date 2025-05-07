/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="podcast-container">
				<div className="podcast-cover-img">
					<img src={attributes.podcastImageUrl} alt="Podcast Cover" />
				</div>

				<div className="podcast-info">
					<span className="podcast-tags">LATEST EPISODE</span>
					<h2 className="podcast-title">{attributes.podcastTitle}</h2>
					<p className="podcast-summary">
						{attributes.podcastSummary}
					</p>
				</div>

				<div className="podcast-player">
					<audio controls>
						<source
							src={attributes.podcastAudioUrl}
							type="audio/mpeg"
						/>
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
		</div>
	);
}
